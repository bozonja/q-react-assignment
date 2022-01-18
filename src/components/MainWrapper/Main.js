import PropTypes from "prop-types";

//custom hooks
import useHelloFromComponent from "custom-hooks/useHelloFromComponent";
//styles
import "./main.css";

const MainWrapper = ({ children }) => {
  useHelloFromComponent("MainWrapper");

  return <main className="main-wrapper">{children}</main>;
};

export default MainWrapper;

MainWrapper.propTypes = {
  children: PropTypes.array,
};
