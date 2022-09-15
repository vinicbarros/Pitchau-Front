import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postCart } from "../services/Pitchau";

export default function Product({ id, img, nameProduct, price }) {
  const navigate = useNavigate();
  async function sendToCart(id) {
    try {
      const cart = await postCart({ productId: id });
      navigate("/precart", { replace: false, state: cart.data.product });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Informations>
        <img src={img} alt="" />
        <ProductName>{nameProduct}</ProductName>
        <ProductPrice>R$ {price}</ProductPrice>
        <ProductComprar
          onClick={() => {
            sendToCart(id);
          }}
        >
          <img
            src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/%C3%8Dcone-Carrinho-de-Compras-PNG.png"
            alt=""
          />
          COMPRAR
        </ProductComprar>
      </Informations>
    </>
  );
}

const Informations = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    width: 200px;
  }
`;
const ProductName = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: darkgray;

  img {
    width: 200px;
  }
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: rgb(227, 82, 20);
`;

const ProductComprar = styled.div`
  width: 250px;
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

  img {
    width: 25px;
  }
`;
