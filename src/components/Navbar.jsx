import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <ContentHeader>
      <Title>πtchau</Title>
      <FaShoppingCart
        style={{
          marginRight: "32px",
        }}
        size="2em"
        color="rgb(107,158,208)"
      />
    </ContentHeader>
  );
}

const ContentHeader = styled.header`
  border-bottom: solid 4px rgb(227, 82, 20);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  font-family: "Raleway";
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(0, 96, 177);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #ffffff;
  margin-left: 32px;
`;
