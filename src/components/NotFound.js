//custom hooks
import useHelloFromComponent from "custom-hooks/useHelloFromComponent";

const NotFound = () => {
  useHelloFromComponent("Not found");

  return (
    <>
      <h1>404 Page not found</h1>
    </>
  );
};

export default NotFound;
