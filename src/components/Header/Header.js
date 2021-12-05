import { useEffect } from "react";

//components
import { Navigation } from "./Navigation";
//styles
import "./header.css";

const Header = ({ helloMessage }) => {
  useEffect(() => {
    console.log(`${helloMessage} Header`);
  });

  return (
    <header className="header">
      <div className="title-with-search">
        <h1 className="fake-logo">Posts</h1>
        <div className="search">
          <div className="form-group">
            <input type="text" placeholder="Search posts..." />
          </div>
        </div>
      </div>
      <Navigation helloMessage={helloMessage} />
    </header>
  );
};

export default Header;
