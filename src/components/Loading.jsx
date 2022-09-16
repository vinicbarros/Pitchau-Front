import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
  return (
    <Content>
      <h1>CARREGANDO...</h1>
      <TailSpin color="#ff6600" />
    </Content>
  );
}

const Content = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins";

  margin-top: 100px;
  h1 {
    color: #ff6600;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
