import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

import { useGlobalContext } from "./useGlobalContext";

function useLogin() {
  const { dispatch } = useGlobalContext();
  const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch({ type: "LOG_IN", payload: user });
    } catch (error) {
      const errorMessage = error.message;
    }
  };

  const loginWithEmail = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      dispatch({ type: "LOG_IN", payload: user });
    } catch (error) {
      const errorMessage = error.message;
    }
  };

  return { signUpWithGoogle, loginWithEmail };
}

export { useLogin };
