import { Link } from "react-router-dom";

//custom hooks
import useHelloFromComponent from "custom-hooks/useHelloFromComponent";

export const Navigation = () => {
  useHelloFromComponent("Navigation");

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
