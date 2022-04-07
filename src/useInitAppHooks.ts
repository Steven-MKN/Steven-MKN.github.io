import {useEffect} from "react";

const useInitAppHooks = () => {
  useEffect(() => {
    // update state accordingly
    window.onfocus = (e) => {
      console.log("focused")
    }
    window.onblur = (e) => {
      console.log("blurred")
    }

    return () => {
      window.onfocus = null
      window.onblur = null
    }
  }, []);
}

export default useInitAppHooks
