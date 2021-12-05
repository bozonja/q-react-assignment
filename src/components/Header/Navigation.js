import { useEffect } from "react";

export const Navigation = ({ helloMessage }) => {
  useEffect(() => {
    console.log(`${helloMessage} Navigation`);
  });

  return (
    <nav>
      <ul>
        <li className="navigation-item">
          <a href="/" className="navigation-item-link">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};
