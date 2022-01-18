import { useEffect } from "react";

const useHelloFromComponent = (compName) => {
  useEffect(() => {
    console.log("Hello from", compName);
  }, [compName]);
};

export default useHelloFromComponent;
