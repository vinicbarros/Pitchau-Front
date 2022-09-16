import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postCart } from "../services/Pitchau";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TailSpin } from "react-loader-spinner";
import { useState } from "react";

export default function Product({ id, img, nameProduct, price, estoque }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function sendToCart(id) {
    try {
      setLoading(!loading);
      const cart = await postCart({ productId: id });
      setLoading(!loading);
      navigate("/precart", { replace: false, state: cart.data.product });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Informations>
        <img src={img} alt="" />
        <TextInformations>
          <ProductName>{nameProduct}</ProductName>
          <ProductPrice>R$ {price}</ProductPrice>
          <InStock>Em estoque ({estoque})</InStock>
        </TextInformations>
        <ProductComprar
          onClick={() => {
            sendToCart(id);
          }}
        >
          {loading ? (
            <TailSpin color="#ffffff" width="10" />
          ) : (
            <>
              <AiOutlineShoppingCart color="white" size={25} />
              COMPRAR
            </>
          )}
        </ProductComprar>
      </Informations>
    </>
  );
}

const Informations = styled.div`
  width: 250px;
  height: 310px;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  position: relative;
  padding-top: 20px;
  img {
    width: 150px;
  }
`;
const ProductName = styled.div`
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 700;
  color: black;

  img {
    width: 200px;
  }
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: rgb(227, 82, 20);
`;
const InStock = styled.div`
  height: 18px;
  width: 100px;
  position: absolute;
  bottom: 85px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: rgb(26, 170, 69);
  border-radius: 5px;
  font-family: "Raleway";
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
`;

const ProductComprar = styled.div`
  font-family: "Raleway";
  width: 200px;
  height: 50px;
  font-size: 15px;
  font-weight: 700;
  background-color: rgb(227, 82, 20);
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  bottom: 20px;

  &:hover {
    background-color: rgb(192, 69, 16);
    transition: 1s;
  }
`;

const TextInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 220px;
  height: 50px;
`;
