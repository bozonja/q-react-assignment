import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

//components
import PageTitle from "components/PageTitle/PageTitle";
import MainWrapper from "components/MainWrapper/Main";
//styles
import "./posts.css";
//assets
import trashIcon from "assets/trash-icon.svg";
//hooks
import useFetch from "custom-hooks/useFetch";

const Posts = ({ helloMessage }) => {
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
            {data.map((post) => (
              <article className="post" key={post.id}>
                <Link to={`/post/${post.id}`}>
                  <h2 className="post-title">{post.title}</h2>
                </Link>
                <p>{post.body}</p>
                <p className="user-text">User: {post.user}</p>
                <div
                  className="delete-post"
                  onClick={() => handleDelete(post.id)}
                >
                  <span className="delete-post-text">Delete blog</span>
                  <img src={trashIcon} className="trash-icon" alt="" />
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
};
