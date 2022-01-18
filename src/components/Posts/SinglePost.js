import { useParams, useNavigate } from "react-router-dom";

//components
import PageTitle from "components/PageTitle/PageTitle";
import MainWrapper from "components/MainWrapper/Main";
//styles
import "./posts.css";
//assets
import trashIcon from "assets/trash-icon.svg";
//hooks
import useFetch from "custom-hooks/useFetch";
import useHelloFromComponent from "custom-hooks/useHelloFromComponent";

const SinglePost = () => {
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

  useHelloFromComponent("Single post");

  return (
    <MainWrapper>
      {isLoading && "Loading..."}
      {error && <span className="error-msg">{error}</span>}
      {data && (
        <>
          <PageTitle title={data.title} />
          <article className="single-post">
            <p>{data.body}</p>
            <p className="user-text">User: {data.user}</p>

            <div className="post-footer">
              <div
                className="post-footer-link"
                onClick={() => handleDelete(data.id)}
              >
                <span className="post-footer-link-text">Delete post</span>
                <img src={trashIcon} className="icon" alt="" />
              </div>
            </div>
          </article>
        </>
      )}
    </MainWrapper>
  );
};

export default SinglePost;
