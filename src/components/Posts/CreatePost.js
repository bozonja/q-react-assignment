import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

//components
import PageTitle from "components/PageTitle/PageTitle";

const CreatePost = ({ helloMessage }) => {
  useEffect(() => {
    console.log(`${helloMessage} Create post`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState("Zvone");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body, user };

    fetch("http://localhost:4000/data", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(post),
    }).then(() => {
      alert("Post created");
      navigate("/");
    });
  };

  return (
    <>
      <PageTitle title="Create post" helloMessage={helloMessage} />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="enter title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Text</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Written by:</label>
          <select value={user} onChange={(e) => setUser(e.target.value)}>
            <option value="Zvone">Zvone</option>
            <option value="Petar">Petar</option>
            <option value="Nina">Nina</option>
          </select>
        </div>

        <button type="submit"> Create</button>
      </form>
    </>
  );
};

export default CreatePost;

CreatePost.propTypes = {
  helloMessage: PropTypes.string.isRequired,
};
