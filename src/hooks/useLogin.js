import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from 

function useLogin() {
  const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert("Success");
    } catch (error) {
      const errorMessage = error.message;
      alert("Error");
    }
  };

  return { signUpWithGoogle };
}

export { useLogin };
