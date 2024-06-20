import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";

import { Form, useActionData, Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

function Register() {
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const handleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  const [errorStatus, setErrorStatus] = useState({
    name: "",
    photoURL: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const userData = useActionData();
  const { registerWithEmailAndPassword } = useRegister();

  useEffect(() => {
    if (userData) {
      if (
        userData.displayName &&
        userData.email &&
        userData.password &&
        userData.photoURL
      ) {
        registerWithEmailAndPassword(userData);
      } else {
        toast.error("Please, enter all of them!");
      }

      if (userData.displayName == "") {
        setErrorStatus((prev) => {
          return { ...prev, name: "input-error" };
        });
      } else {
        setErrorStatus((prev) => {
          return { ...prev, name: "" };
        });
      }

      if (userData.password == "") {
        setErrorStatus((prev) => {
          return { ...prev, password: "input-error" };
        });
      } else {
        setErrorStatus((prev) => {
          return { ...prev, password: "" };
        });
      }

      if (userData.photoURL == "") {
        setErrorStatus((prev) => {
          return { ...prev, photoURL: "input-error" };
        });
      } else {
        setErrorStatus((prev) => {
          return { ...prev, photoURL: "" };
        });
      }

      if (userData.email == "") {
        setErrorStatus((prev) => {
          return { ...prev, email: "input-error" };
        });
      } else {
        setErrorStatus((prev) => {
          return { ...prev, email: "" };
        });
      }
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
          error={errorStatus.name}
        ></FormInput>
        <FormInput
          type="url"
          labelText="Photo URL:"
          name="photoURL"
          error={errorStatus.photoURL}
        ></FormInput>
        <FormInput
          type="email"
          labelText="Email:"
          name="email"
          error={errorStatus.email}
        ></FormInput>
        <FormInput
          type="password"
          labelText="Password:"
          name="password"
          error={errorStatus.password}
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
        Already have an account?
        <Link to="/login" className="link">
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default Register;
