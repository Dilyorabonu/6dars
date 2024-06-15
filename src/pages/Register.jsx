import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";

import { Form, useActionData } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useEffect, useState } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let email = formData.get("email");
  let password = formData.get("password");
  let photoURL = formData.get("photoURL");

  return { displayName, email, password, photoURL };
};

function themeFromLocalStorage() {
  return localStorage.getItem("theme") || "winter";
}

function Register({ onLoginClick }) {
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const handleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const userData = useActionData();
  const { registerWithEmailAndPassword } = useRegister();

  useEffect(() => {
    if (userData) {
      registerWithEmailAndPassword(userData);
    }
  }, [userData]);

  const { signUpWithGoogle } = useLogin();
  return (
    <div className="min-h-screen grid place-items-center">
      <Form method="post" className="w-96">
        <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
        <FormInput
          type="text"
          labelText="Display name:"
          name="displayName"
        ></FormInput>
        <FormInput
          type="url"
          labelText="Photo URL:"
          name="photoURL"
        ></FormInput>
        <FormInput type="email" labelText="Email:" name="email"></FormInput>
        <FormInput
          type="password"
          labelText="Password:"
          name="password"
        ></FormInput>
        <div className="mt-6">
          <button className="btn btn-secondary btn-block" type="submit">
            Submit
          </button>
        </div>
        <button
          type="button"
          onClick={signUpWithGoogle}
          className="btn btn-secondary btn-block mt-3"
        >
          Google
        </button>
      </Form>
      <p className="text-center mb-5">
        Already have an account?
        <button
          className="btn btn-secondary btn-block mt-2"
          onClick={onLoginClick}
        >
          Sign In
        </button>
      </p>
    </div>
  );
}

export default Register;
