import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

//components
import PageTitle from "components/PageTitle/PageTitle";
import MainWrapper from "components/MainWrapper/Main";
//styles
import "./posts.css";
//assets
import editIcon from "assets/edit-icon.svg";
import trashIcon from "assets/trash-icon.svg";
//hooks
import useFetch from "custom-hooks/useFetch";

const Posts = ({ helloMessage, searchTerm }) => {
  //consts
  const noPostsMessage = "No posts to show...";

  //hooks
  const navigate = useNavigate();
  const { isLoading, error, data } = useFetch("http://localhost:4000/data");

  const handleDelete = (id) => {
    fetch("http://localhost:4000/data/" + id, {
      method: "DELETE",
    }).then(() => {
      alert("Post deleted");
      navigate(0);
    });
  };

  useEffect(() => {
    console.log(`${helloMessage} Posts`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainWrapper helloMessage={helloMessage}>
      <PageTitle title="Home" helloMessage={helloMessage} />
      <section className="posts">
        {isLoading && <span>Loading...</span>}
        {error && <span className="error-msg">{error}</span>}
        {data && (
          <>
            {data
              // eslint-disable-next-line array-callback-return
              .filter((post) => {
                if (searchTerm === "") {
                  return post.body;
                } else if (
                  post.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return post.title;
                } else if (
                  post.body.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return post.body;
                }
              })
              .map((post) => (
                <article className="post" key={post.id}>
                  <Link to={`/post/${post.id}`}>
                    <h2 className="post-title">{post.title}</h2>
                  </Link>
                  <p>{post.body}</p>
                  <p className="user-text">User: {post.user}</p>

                  <div className="post-footer">
                    <Link to={`/edit/${post.id}`}>
                      <span className="post-footer-link-text">Edit post</span>
                      <img src={editIcon} className="icon" alt="" />
                    </Link>

                    <div
                      className="post-footer-link"
                      onClick={() => handleDelete(post.id)}
                    >
                      <span className="post-footer-link-text">Delete post</span>
                      <img src={trashIcon} className="icon" alt="" />
                    </div>
                  </div>
                </article>
              ))}
          </>
        )}
        {data && data.length === 0 && !error && <span>{noPostsMessage}</span>}
      </section>
    </MainWrapper>
  );
};

export default Posts;

Posts.propTypes = {
  helloMessage: PropTypes.string,
  searchTerm: PropTypes.string,
};
