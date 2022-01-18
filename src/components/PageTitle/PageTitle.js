import { useLocation, Link } from "react-router-dom";
import PropTypes from "prop-types";

//styles
import "./page-title.css";
//custom hooks
import useHelloFromComponent from "custom-hooks/useHelloFromComponent";

const PageTitle = ({ title }) => {
  const { pathname } = useLocation();

  useHelloFromComponent("PageTitle");

  return (
    <div className="page-title-container">
      <h2 className="page-title">{title}</h2>
      {!pathname.includes("create") && (
        <Link to="/create">
          <button>Create new post</button>
        </Link>
      )}
    </div>
  );
};

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
