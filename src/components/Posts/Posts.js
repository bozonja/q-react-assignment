import { useState, useEffect } from "react";

//styles
import "./posts.css";
//assets
import trashIcon from "assets/trash-icon.svg";

const Posts = ({ helloMessage }) => {
  const fakeData = [
    {
      user: "Zvone",
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      user: "Josip",
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      user: "Šime",
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
  ];

  const noPostsMessage = "No posts to show..";

  const [posts, setPosts] = useState(fakeData);

  const handleDelete = (id) => {
    const newPost = posts.filter((post) => post.id !== id);
    setPosts(newPost);
  };

  useEffect(() => {
    console.log(`${helloMessage} Posts`);
  }, [helloMessage]);

  return (
    <main>
      <h2 className="page-title">Blog posts</h2>
      <section className="posts">
        {posts.length === 0 && <span>{noPostsMessage}</span>}
        {posts.map((post) => (
          <article className="post" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p>{post.body}</p>
            <p className="user-text">User: {post.user}</p>
            <div className="delete-post" onClick={() => handleDelete(post.id)}>
              <span className="delete-post-text">Delete blog</span>
              <img src={trashIcon} className="trash-icon" alt="" />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Posts;
