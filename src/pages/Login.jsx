import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";

import { Form, useActionData, Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useEffect, useState } from "react";

function themeFromLocalStorage() {
  return localStorage.getItem("theme") || "winter";
}

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");

  return { email, password };
};

function Login() {
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const handleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const { signUpWithGoogle, loginWithEmail } = useLogin();
  const userData = useActionData();
  useEffect(() => {
    if (userData) {
      loginWithEmail(userData.email, userData.password);
    }
  }, [userData]);

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
      <p className="text-center mb-5 flex gap-2">
        Don't have an account?
        <Link to="/register" className="link">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Login;
