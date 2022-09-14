import styled from "styled-components";

const Container = styled.section`
  background-color: rgb(245, 245, 245);
  font-family: "Raleway";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  a {
    margin-top: 30px;
    text-decoration: none;
    font-size: 20px;
    color: rgb(127, 133, 141);
  }

  strong {
    font-weight: bold;
    color: rgb(239, 99, 50);
    text-decoration: underline;
  }
`;

const Form = styled.form`
  width: 350px;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(127, 133, 141);
  border-radius: 2px;

  input {
    height: 58px;
    border-radius: 5px;
    border: 1px solid rgb(127, 133, 141);
    padding-left: 10px;
    font-size: 20px;
    font-weight: 500;
    background-color: rgb(245, 245, 245);
    margin-bottom: 13px;
  }

  input::placeholder {
    font-size: 20px;
    font-weight: 500;
    color: rgb(127, 133, 141);
  }

  input:focus {
    outline: 0.5px solid rgb(239, 99, 50);
  }

  h2 {
    color: rgb(239, 99, 50);
    font-weight: bold;
    font-size: 36px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  h5 {
    color: rgb(239, 99, 50);
    text-decoration: underline;
    font-weight: bold;
    margin-bottom: 12px;
    font-size: 15px;
  }
`;

const Button = styled.button`
  background-color: rgb(239, 99, 50);
  height: 46px;
  border-radius: 5px;
  color: #ffffff;
  border: none;
  font-size: 20px;
  font-weight: bold;
  width: 277px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Button, Form, Container };
