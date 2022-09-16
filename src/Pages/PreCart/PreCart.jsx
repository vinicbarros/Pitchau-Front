import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { AiFillCheckCircle } from "react-icons/ai";

export default function PreCart() {
  const { state } = useLocation();
  const { name, price, description, img } = state;
  let priceProd = price / 100;

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Product>
            <Box>
              <img src={img} alt="" />
              <Wrap>
                <p>{description}</p>
                <h4>{name}</h4>
              </Wrap>
            </Box>
            <PriceBox>
              <Box3>
                <h3>12x de {((priceProd * 1.35) / 12).toFixed(2)} R$ </h3>
                <h3>À prazo: {(priceProd * 1.35).toFixed(2)} R$</h3>
              </Box3>
              <Box2>
                <h3>R$ {((price * 0.9) / 100).toFixed(2)} </h3>
                <h3>(À vista no PIX)</h3>
              </Box2>
            </PriceBox>
          </Product>
          <Product2>
            <div>
              <AiFillCheckCircle color="2dc26e" size="1em" />
              <h5>ITEM ADICIONADO AO CARRINHO COM SUCESSO</h5>
            </div>
            <Wrap2>
              <Link to="/">
                <Button cor="branco">CONTINUAR COMPRANDO</Button>
              </Link>
              <Link to="/cart">
                <Button cor="laranja" margin="sim">
                  IR PARA O CARRINHO
                </Button>
              </Link>
            </Wrap2>
          </Product2>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.section`
  font-family: "Poppins";
  margin-top: 70px;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  background-color: rgb(242, 243, 244);
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 42vh;
  background-color: #ffffff;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

const Product2 = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  h5 {
    margin-left: 10px;
    font-weight: bold;
    font-size: 16px;
    color: #2dc26e;
  }
`;

const PriceBox = styled.div`
  display: flex;
`;

const Box = styled.div`
  display: flex;
  margin-left: 30px;

  img {
    width: 175px;
    height: 175px;
  }
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-weight: bold;
    color: #ff6500;
    font-size: 18px;
    text-align: end;
    margin-right: 36px;
    margin-left: 16px;
  }
`;

const Box3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-right: 1px solid #565c69;

  h3 {
    font-weight: bold;
    color: #565c69;
    font-size: 18px;
    text-align: end;
    margin-right: 14px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 36px;
  justify-content: center;

  h4 {
    font-weight: 600;
    font-size: 16px;
    color: #42464d;
  }

  p {
    margin-bottom: 5px;
    font-size: 14px;
    color: #7f858d;
  }
`;

const Wrap2 = styled.div``;

const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  width: 278px;
  height: 48px;
  border-radius: 5px;
  border: 1.8px solid #ff6500;
  margin-left: ${(props) => (props.margin === "sim" ? "18px" : "0px")};
  background-color: ${(props) =>
    props.cor === "laranja" ? "#FF6500" : "#ffffff"};
  color: ${(props) => (props.cor === "laranja" ? "#ffffff" : "#FF6500")};
`;
export { Button };
