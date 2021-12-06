import { useState, useEffect } from "react";

//styles
import "./posts.css";
//assets
import trashIcon from "assets/trash-icon.svg";

const Posts = ({ helloMessage }) => {
  //consts
  const noPostsMessage = "No posts to show...";

  //hooks
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  //functions
  const fetchData = () => {
    fetch("http://localhost:4000/data")
      .then((response) => {
        if (!response.ok) {
          throw Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  const handleDelete = (id) => {
    fetch("http://localhost:4000/data/" + id, {
      method: "DELETE",
    });
  };

  useEffect(() => {
    console.log(`${helloMessage} Posts`);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h2 className="page-title">Blog posts</h2>
      <section className="posts">
        {isLoading && <span>Loading...</span>}
        {error && <span className="error-msg">{error}</span>}
        {data && (
          <>
            {data.map((post) => (
              <article className="post" key={post.id}>
                <h2 className="post-title">{post.title}</h2>
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
    </main>
  );
};

export default Posts;
