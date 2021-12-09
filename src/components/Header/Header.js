import { useEffect } from "react";
import PropTypes from "prop-types";

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
        <h1 className="logo-text">Posts app</h1>
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

Header.propTypes = {
  helloMessage: PropTypes.string,
};
