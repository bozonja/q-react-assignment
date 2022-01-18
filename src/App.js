import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//components
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import SinglePost from "components/Posts/SinglePost";
import CreatePost from "components/Posts/CreatePost";
import Footer from "./components/Footer/Footer";
import EditPost from "./components/Posts/EditPost";
import NotFound from "./components/NotFound";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Posts searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
