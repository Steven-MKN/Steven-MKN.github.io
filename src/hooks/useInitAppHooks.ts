import { useEffect } from "react";

const useInitAppHooks = () => {
  useEffect(() => {
    // update state accordingly
    window.onfocus = () => {
      console.log("focused");
    };
    window.onblur = () => {
      console.log("blurred");
    };

    return () => {
      window.onfocus = null;
      window.onblur = null;
    };
  }, []);
};

export default useInitAppHooks;
