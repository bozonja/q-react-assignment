import "./App.css";

function App() {
  return (
    <section className="wrapper">
      <header className="header">
        <div className="title-with-search">
          <h1 className="fake-logo">Posts</h1>
          <div className="search">
            <div className="form-group">
              <input type="text" placeholder="Search posts..." />
            </div>
          </div>
        </div>

        <nav>
          <ul>
            <li className="navigation-item">
              <a href="#" className="navigation-item-link">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h2 className="page-title">Blog posts</h2>
        <section className="posts">
          <article className="post">
            <h2 className="post-title">Blog title</h2>
            <p>Some random text</p>
            <p>User: Zvone</p>
          </article>
          <article className="post">
            <h2 className="post-title">Blog title</h2>
            <p>Some random text</p>
            <p>User: Zvone</p>
          </article>
          <article className="post">
            <h2 className="post-title">Blog title</h2>
            <p>Some random text</p>
            <p>User: Zvone</p>
          </article>
          <article className="post">
            <h2 className="post-title">Blog title</h2>
            <p>Some random text</p>
            <p>User: Zvone</p>
          </article>
        </section>
      </main>
    </section>
  );
}

export default App;
