import { auth } from "../firebase/firebaseConfig";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useGlobalContext } from "./useGlobalContext";
import toast from "react-hot-toast";
function useRegister() {
  const {dispatch} = useGlobalContext()
  const registerWithEmailAndPassword = async (userData) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      await updateProfile(auth.currentUser, {
        displayName: userData.displayName,
        photoURL: userData.photoURL,
      });
      const userCredential = result.user;
      dispatch({ type: "LOG_IN", payload: userCredential });
      toast.success(`Welcome ${userCredential.displayName} `);
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };

  return { registerWithEmailAndPassword };
}

export { useRegister };
