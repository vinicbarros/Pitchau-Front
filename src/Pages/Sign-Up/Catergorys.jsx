import styled from "styled-components";
import Category from "../../components/Category";

export default function Categorys() {
  return (
    <CategoryBar>
      <Category name="Monitores" />
      <Category name="HeadSet" />
      <Category name="Placas de vídeo" />
      <Category name="Mouse gamer" />
      <Category name="Teclado gamer" />
      <Category name="Gabinetes" />
    </CategoryBar>
  );
}

const CategoryBar = styled.div`
  z-index: 101;
  position: fixed;
  top: 96px;
  width: 100vw;
  height: 34px;
  display: flex;
  justify-content: center;
  gap: 2px;
  background-color: rgb(225, 101, 0);

  div + div {
    border-left: 0.007em solid rgb(255, 139, 31);
  }

  div:hover {
    background-color: #e35214;
    transition: 1s;
  }
`;
