import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../src/contexts/UserContext";

export default function Category({ name }) {
  const { setClicked, clicked } = useContext(UserContext);
  const navigate = useNavigate();

  function goToCategory(event) {
    event.preventDefault();

    navigate(`/products/${name}`);
    setClicked(!clicked);
  }
  return (
    <CategoryHeader onClick={goToCategory}>
      <Title>{name.toUpperCase()}</Title>
    </CategoryHeader>
  );
}

const CategoryHeader = styled.div`
  z-index: 110;
  font-family: "Poppins";
  width: 10vw;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  justify-content: center;
`;
