import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { useContext, useEffect } from "react";
import { getCartUser } from "../services/Pitchau";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { setUserCartList, userCartList } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const userCart = await getCartUser();
        setUserCartList(userCart.data.userCartList);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <ContentHeader>
      <Title>πtchau</Title>
      <InputBox>
        <SearchBar placeholder="Busque aqui"></SearchBar>
        <div>
          <AiOutlineSearch />
        </div>
      </InputBox>
      <Wrapper>
        <CartBox
          onClick={() => {
            console.log("to aqui");
            navigate("/cart");
          }}
        >
          <FaShoppingCart size="1.5em" color="rgb(107,158,208)" />
          {userCartList.length === 0 ? <></> : <div>{userCartList.length}</div>}
        </CartBox>
        <ImExit
          style={{
            marginLeft: "30px",
          }}
          size="1.5em"
          color="rgb(107,158,208)"
        />
      </Wrapper>
    </ContentHeader>
  );
}

const ContentHeader = styled.header`
  border-bottom: solid 4px rgb(227, 82, 20);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  font-family: "Poppins";
  width: 100vw;
  height: 6em;
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;
`;

const CartBox = styled.div`
  display: flex;
  position: relative;

  div {
    right: -10px;
    top: -5px;
    position: absolute;
    font-weight: bold;
    font-size: 12px;
    width: 16px;
    height: 16px;
    background-color: #e35214;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
  }
`;

const InputBox = styled.form`
  position: relative;
  width: 40%;
  display: flex;
  align-items: center;
  div {
    position: absolute;
    right: 1em;
  }
`;

const SearchBar = styled.input`
  border: none;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  position: relative;
  width: 100%;
  height: 1.25rem;
  padding: 0.75rem 1rem;
  background: rgb(255, 255, 255);
  color: rgb(66, 70, 77);
  border-radius: 0.25rem;
`;
