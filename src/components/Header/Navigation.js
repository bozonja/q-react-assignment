import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Navigation = ({ helloMessage }) => {
  useEffect(() => {
    console.log(`${helloMessage} Navigation`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav>
      <ul>
        <li className="navigation-item">
          <Link to="/" className="navigation-item-link">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  helloMessage: PropTypes.string,
};
