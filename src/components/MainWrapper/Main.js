import { useEffect } from "react";
import PropTypes from "prop-types";

//styles
import "./main.css";

const MainWrapper = ({ children, helloMessage }) => {
  useEffect(() => {
    console.log(`${helloMessage} MainWrapper`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <main>{children}</main>;
};

export default MainWrapper;

MainWrapper.propTypes = {
  helloMessage: PropTypes.string,
  children: PropTypes.array,
};
