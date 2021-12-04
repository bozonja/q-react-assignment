//components
import { Navigation } from "./Navigation";
//styles
import "./header.css";

const Header = () => {
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
      <Navigation />
    </header>
  );
};

export default Header;
