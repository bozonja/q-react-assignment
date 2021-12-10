import { useEffect } from "react";
import PropTypes from "prop-types";

//styles
import "./footer.css";

const Footer = ({ helloMessage }) => {
  useEffect(() => {
    console.log(`${helloMessage} Footer`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <footer className="footer">
      <span className="copyright">Made by Josip Marković for Q Agency</span>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  helloMessage: PropTypes.string,
};
