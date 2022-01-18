import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

//custom hooks
import useHelloFromComponent from "custom-hooks/useHelloFromComponent";
//components
import { Navigation } from "./Navigation";
//styles
import "./header.css";

const Header = ({ searchTerm, setSearchTerm }) => {
  useHelloFromComponent("Header");

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
      <Navigation />
    </header>
  );
};

export default Header;

Header.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};
