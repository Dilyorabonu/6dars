import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";

import { Form } from "react-router-dom";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let email = formData.get("email");
  let password = formData.get("password");

  return 1;
};
function Register() {
  const { signUpWithGoogle } = useLogin();
  return (
    <div className="min-h-screen grid place-items-center">
      <Form method="post" className="w-96">
        <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
        <FormInput
          type="text"
          labelText="Display name"
          name="displayName"
        ></FormInput>
        <FormInput type="email" labelText="Email" name="email"></FormInput>
        <FormInput
          type="password"
          labelText="Password"
          name="password"
        ></FormInput>
      </Form>
      <button onClick={signUpWithGoogle} className="btn btn-secondary">
        Google
      </button>
    </div>
  );
}

export default Register;
