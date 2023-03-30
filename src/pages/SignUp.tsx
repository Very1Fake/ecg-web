import { Store, createStore } from "solid-js/store";
import { useSignInForm } from "../utils/validation";

const EMAILS = ["some@example.com"];

function fetchUserName(name: string) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(EMAILS.indexOf(name) > -1), 200);
  });
}

const ErrorMessage = (props) => (
  <span class="error-message">{props.error}</span>
);

const SignUp = () => {
  const { form, updateFormField, submit, clearField } = useSignInForm();

  const handleSubmit = (event: Event): void => {
    event.preventDefault();
    submit(form);
  };

  return (
    <form onSubmit={handleSubmit} class="centered-children">
      <h1>Sign Up</h1>
      <div class="field-block">
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          onChange={updateFormField("username")}
        />
      </div>
      <div class="field-block">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={updateFormField("email")}
        />
      </div>
      <div class="field-block">
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          minlength="6"
          onChange={updateFormField("password")}
        />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
