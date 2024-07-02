import { FormEventHandler } from "react";
import { useForm } from "../hooks";
import '../styles/styles.css';

export const RegisterPage = () => {

  const { email, name, password, repeatPassword, handleChange, resetForm } = useForm({
    initialState: {
      email: "",
      name: "",
      password: "",
      repeatPassword: ""
    }
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

  };


  return (
    <div>
      <h1>RegisterPage</h1>
      <form action="#" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          value={email}
        />

        <label htmlFor="name">Email</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ex. John Doe"
          onChange={handleChange}
          value={name}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="A$*******"
          onChange={handleChange}
          value={password}
        />

        <label htmlFor="repeatPassword">Password</label>
        <input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          placeholder="A$*******"
          onChange={handleChange}
          value={repeatPassword}
        />

        <button type="submit">Register</button>
        <button onClick={resetForm}>Reset Form</button>
      </form>

    </div>
  );
};
