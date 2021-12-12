import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

//custom hook
import useFetch from "custom-hooks/useFetch";
//components
import PageTitle from "components/PageTitle/PageTitle";

const EditPost = ({ helloMessage }) => {
  useEffect(() => {
    console.log(`${helloMessage} Edit post`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //hooks
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    "http://localhost:4000/data/" + id
  );
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState("Zvone");

  const handleChange = (e) => {
    e.preventDefault();
    const posts = { user, title, body };

    fetch("http://localhost:4000/data/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(posts),
    }).then(() => {
      alert("Post changed");
      navigate("/");
    });
  };

  return (
    <>
      {/* TODO: show default values when current post is opened */}
      {isLoading && <span>Loading...</span>}
      {error && <span className="error-msg">{error}</span>}
      {data && (
        <>
          <PageTitle title={`Edit ${data.title}`} helloMessage={helloMessage} />
          <form onSubmit={handleChange}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="edit title"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Text</label>
              <textarea
                required
                onChange={(e) => setBody(e.target.value)}
                placeholder="edit description"
              />
            </div>

            <div className="form-group">
              <label>Written by:</label>
              <select onChange={(e) => setUser(e.target.value)}>
                <option value="Zvone">Zvone</option>
                <option value="Petar">Petar</option>
                <option value="Nina">Nina</option>
              </select>
            </div>

            <button type="submit"> Change</button>
          </form>
        </>
      )}
    </>
  );
};

export default EditPost;

EditPost.propTypes = {
  helloMessage: PropTypes.string.isRequired,
};