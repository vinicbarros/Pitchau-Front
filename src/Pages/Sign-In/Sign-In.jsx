import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { BiExit } from "react-icons/bi";
import { useState } from "react";
import { Form, Container, Button } from "../../common/Formstyle";
import { postSignIn } from "../../services/Pitchau";
import { TailSpin } from "react-loader-spinner";

export default function SignIn() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();

    try {
      const data = await postSignIn({
        email: userLogin.email,
        password: userLogin.password,
      });
      setLoading(!loading);
      const JSONauth = JSON.stringify({
        token: data.data.token,
      });
      localStorage.setItem("pitchau", JSONauth);
      navigate("/");
    } catch (error) {
      setLoading(!loading);
      setError({
        isError: true,
        message: error.response.data.message,
      });
    }
  }

  function handleSignIn(e) {
    const value = e.target.value;
    setUserLogin({ ...userLogin, [e.target.name]: value });
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleForm}>
          <h2>ENTRAR</h2>
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={userLogin.email}
            onChange={handleSignIn}
            placeholder="E-mail"
            required
          />
          <input
            autoComplete="off"
            type="password"
            name="password"
            value={userLogin.password}
            onChange={handleSignIn}
            placeholder="Senha"
            required
          />
          {error.isError ? <h5>{error.message}</h5> : <></>}
          <Button
            type="submit"
            onClick={() => {
              setLoading(!loading);
            }}
          >
            {loading ? (
              <TailSpin color="#ffffff" width="10" />
            ) : (
              <>
                <BiExit />
                Entrar
              </>
            )}
          </Button>
        </Form>
        <Link to="/sign-up">
          <a>
            Novo na πtchau? <strong>Cadastre-se!</strong>
          </a>
        </Link>
      </Container>
    </>
  );
}
