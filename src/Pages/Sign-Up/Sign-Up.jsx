import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { postSignUp } from "../../services/Pitchau";
import { Form, Container, Button } from "../../common/Formstyle";
import { BiExit } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();
    setError({
      isError: false,
      message: "",
    });
    const equal = userSignUp.password === userSignUp.confirm;
    if (!equal) {
      setError({
        isError: true,
        message: "Password do not match.",
      });
      return;
    }
    try {
      await postSignUp({
        name: userSignUp.name,
        email: userSignUp.email,
        password: userSignUp.password,
      });
      navigate("/sign-in");
    } catch (error) {
      console.log(error);
    }
  }

  function handleSignUp(e) {
    let value = e.target.value;
    setUserSignUp({ ...userSignUp, [e.target.name]: value });
  }

  return (
    <>
      <Navbar />
      <Container>
        <SignUpForm onSubmit={handleForm}>
          <h2>SIGN UP</h2>
          <input
            autoComplete="off"
            type="text"
            name="name"
            value={userSignUp.name}
            onChange={handleSignUp}
            placeholder="Name"
            required
          />
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={userSignUp.email}
            onChange={handleSignUp}
            placeholder="E-mail"
            required
          />
          <input
            autoComplete="off"
            type="password"
            name="password"
            value={userSignUp.password}
            onChange={handleSignUp}
            placeholder="Password"
            required
          />
          <input
            autoComplete="off"
            type="password"
            name="confirm"
            value={userSignUp.confirm}
            onChange={handleSignUp}
            placeholder="Confirm your password"
            required
          />
          {error.isError ? <h5>{error.message}</h5> : <></>}
          <Button type="submit">
            <BiExit />
            Sign Up
          </Button>
        </SignUpForm>
        <Link to="/sign-in">
          <a>
            Already have an account? <strong>Sign In!</strong>
          </a>
        </Link>
      </Container>
    </>
  );
}

const SignUpForm = styled(Form)`
  height: 540px;
`;
