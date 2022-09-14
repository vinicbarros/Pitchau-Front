import styled from "styled-components";

export default function Navbar() {
  return (
    <ContentHeader>
      <Title>πtchau</Title>
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
  background-color: rgb(0, 96, 177);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #ffffff;
  margin-left: 32px;
`;
