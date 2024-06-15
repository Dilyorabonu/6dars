import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";

import { Form, useActionData } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useEffect, useState } from "react";

function themeFromLocalStorage() {
  return localStorage.getItem("theme") || "winter";
}

function Login({ onRegisterClick }) {
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const handleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const { signUpWithGoogle } = useLogin();

  return (
    <div className="min-h-screen grid place-items-center">
      <Form method="post" className="w-96">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <FormInput type="email" labelText="Email:" name="email"></FormInput>
        <FormInput
          type="password"
          labelText="Password:"
          name="password"
          required
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
      <p className="text-center">
        Don't have an account?
        <button
          className="btn btn-secondary btn-block mt-2"
          onClick={onRegisterClick}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}

export default Login;
