import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";

import { Form, useActionData } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useEffect } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let email = formData.get("email");
  let password = formData.get("password");

  return { displayName, email, password };
};
function Register() {
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
    </div>
  );
}

export default Register;
