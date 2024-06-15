import { auth } from "../firebase/firebaseConfig";

import { createUserWithEmailAndPassword } from "firebase/auth";

function useRegister() {
  const registerWithEmailAndPassword = async (userData) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      await updateProfile(auth.currentUser, {
        displayName: userData.displayName,
      });
      const userCredential = result.user;
      console.log(userCredential);
    } catch (error) {}
  };

  return { registerWithEmailAndPassword };
}

export { useRegister };
