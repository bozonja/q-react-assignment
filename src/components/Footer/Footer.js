//custom hooks
import useHelloFromComponent from "custom-hooks/useHelloFromComponent";
//styles
import "./footer.css";

const Footer = () => {
  useHelloFromComponent("Footer");

  return (
    <footer className="footer">
      <span className="copyright">Made by Josip Marković for Q Agency</span>
    </footer>
  );
};

export default Footer;
