import { useEffect } from "react";

//styles
import "./footer.css";

const Footer = ({ helloMessage }) => {
  useEffect(() => {
    console.log(`${helloMessage} Footer`);
  });

  return (
    <footer className="footer">
      <span className="copyright">Made by Josip Marković for Q Agency</span>
    </footer>
  );
};

export default Footer;
