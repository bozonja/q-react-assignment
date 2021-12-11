import { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

//components
import { Navigation } from "./Navigation";
//styles
import "./header.css";

const Header = ({ helloMessage, searchTerm, setSearchTerm }) => {
  useEffect(() => {
    console.log(`${helloMessage} Header`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useLocation();

  return (
    <header className="header">
      <div className="title-with-search">
        <h1 className="logo-text">Posts app</h1>
        {location.pathname === "/" && (
          <div className="search">
            <div className="form-group">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
      <Navigation helloMessage={helloMessage} />
    </header>
  );
};

export default Header;

Header.propTypes = {
  helloMessage: PropTypes.string,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};
