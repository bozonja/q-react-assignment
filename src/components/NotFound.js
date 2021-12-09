import { useEffect } from "react";
import PropTypes from "prop-types";

const NotFound = ({ helloMessage }) => {
  useEffect(() => {
    console.log(`${helloMessage} NotFound`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>404 Page not found</h1>
    </div>
  );
};

export default NotFound;

NotFound.propTypes = {
  helloMessage: PropTypes.string.isRequired,
};
