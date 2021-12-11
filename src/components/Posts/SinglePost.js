import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

//components
import PageTitle from "components/PageTitle/PageTitle";
import MainWrapper from "components/MainWrapper/Main";
//styles
import "./posts.css";
//assets
import trashIcon from "assets/trash-icon.svg";
//hooks
import useFetch from "custom-hooks/useFetch";

const SinglePost = ({ helloMessage }) => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    "http://localhost:4000/data/" + id
  );
  const navigate = useNavigate();

  const handleDelete = (id) => {
    fetch("http://localhost:4000/data/" + id, {
      method: "DELETE",
    }).then(() => {
      alert("Post deleted");
      navigate("/");
    });
  };

  useEffect(() => {
    console.log(`${helloMessage} Single post`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainWrapper helloMessage={helloMessage}>
      {isLoading && "Loading..."}
      {error && <span className="error-msg">{error}</span>}
      {data && (
        <>
          <PageTitle title={data.title} helloMessage={helloMessage} />
          <article className="single-post">
            <p>{data.body}</p>
            <p className="user-text">User: {data.user}</p>

            <div className="post-footer">
              <div
                className="post-footer-link"
                onClick={() => handleDelete(data.id)}
              >
                <span className="post-footer-link-text">Delete post</span>
                <img src={trashIcon} className="trash-icon" alt="" />
              </div>
            </div>
          </article>
        </>
      )}
    </MainWrapper>
  );
};

export default SinglePost;

SinglePost.propTypes = {
  helloMessage: PropTypes.string,
};
