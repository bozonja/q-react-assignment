import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PropTypes from "prop-types";

//styles
import "./page-title.css";

const PageTitle = ({ helloMessage, title }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(`${helloMessage} PageTitle`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  helloMessage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
