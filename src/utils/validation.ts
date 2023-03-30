import { createStore } from "solid-js/store";

export type SignInFormFields = {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const submit = (form: SignInFormFields) => {
  const dataToSubmit = {
    name: form.email,
    password: form.password,
  };
  console.log(`submitting ${JSON.stringify(dataToSubmit)}`);
};

export const useSignInForm = () => {
  const [form, setForm] = createStore<SignInFormFields>({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const clearField = (fieldName: string) => {
    setForm({
      [fieldName]: "",
    });
  };

  const updateFormField = (fieldName: string) => (event: Event) =>
    setForm({
      [fieldName]: (event.currentTarget as HTMLInputElement).value,
    });

  return { form, submit, updateFormField, clearField };
};
