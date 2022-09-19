import styled from "styled-components";
import CartProductList from "../../components/CartProductList";
import Navbar from "../../components/Navbar";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { TailSpin } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../PreCart/PreCart";

export default function Cart() {
  const { setUserCartList, userCartList, setAddress, address } =
    useContext(UserContext);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const navigate = useNavigate();
  let sum = 0;
  let sumPix = 0;
  sumAllproducts();
  function sumAllproducts() {
    userCartList.forEach((item) => {
      let price = item.price / 100;
      sum += price;
      price = (item.price / 100) * 0.9;
      sumPix += price;
    });
  }

  function sendToPayment(e) {
    e.preventDefault();

    if (
      address.address.length === 0 ||
      address.number.length === 0 ||
      address.CEP.length === 0
    ) {
      setError({
        isError: true,
        message: "Preencha os campos corretamente!",
      });
    } else {
      setError({
        isError: false,
        message: "",
      });
      navigate("/checkout");
    }
  }

  function handleValuesInputs(e) {
    let value = e.target.value;
    setAddress({ ...address, [e.target.name]: value });
  }

  return (
    <>
      <Navbar />

      <Container>
        {userCartList.length === 0 ? (
          <Message>
            <MessageIcon>:(</MessageIcon>
            <MessageBox>
              <h3>Ops,seu carrinho está vazio</h3>
              <p>
                <Link to="/">
                  <strong> Clique aqui </strong>
                </Link>
                para voltar a comprar.
              </p>
            </MessageBox>
          </Message>
        ) : (
          <BoxContent>
            <TotalDiv>
              Total no carrinho ({userCartList.length} itens):
              <strong> R$ {sum.toFixed(2).replace(".", ",")}</strong>
            </TotalDiv>
            <DivEndereco>
              ENDEREÇO DE ENTREGA
              <InputBox>
                <input
                  onChange={handleValuesInputs}
                  name="address"
                  value={address.address}
                  type="text"
                  required
                  placeholder="Rua/Avenida"
                ></input>
                <input
                  onChange={handleValuesInputs}
                  name="number"
                  value={address.number}
                  type="number"
                  required
                  placeholder="Número"
                ></input>
                <input
                  onChange={handleValuesInputs}
                  name="CEP"
                  value={address.CEP}
                  type="number"
                  required
                  placeholder="CEP"
                ></input>
              </InputBox>
              {error.isError ? <h5>{error.message}</h5> : <></>}
            </DivEndereco>
            <ProductsListWrap>
              {userCartList.map((product, key) => (
                <CartProductList
                  id={product._id}
                  key={key}
                  index={key}
                  img={product.img}
                  nameProduct={product.name}
                  price={product.price / 100}
                />
              ))}
            </ProductsListWrap>
            <InfosBox>
              <Discount>
                <h4>VALOR COM DESCONTO:</h4>
                <div>
                  <strong>{sumPix.toFixed(2).replace(".", ",")} R$</strong>
                  <p>À VISTA NO PIX</p>
                </div>
              </Discount>
              <TotalValue>
                <h4>VALOR TOTAL:</h4>
                <div>
                  <strong>ou {sum.toFixed(2).replace(".", ",")} R$</strong>
                  <p>até 6x sem juros</p>
                </div>
              </TotalValue>
            </InfosBox>
            <ButtonBox>
              <Link to="/">
                <Button cor="branco">CONTINUAR COMPRANDO</Button>
              </Link>
              <Button onClick={sendToPayment} cor="laranja">
                IR PARA PAGAMENTO
              </Button>
            </ButtonBox>
          </BoxContent>
        )}
      </Container>
    </>
  );
}

const Container = styled.section`
  font-family: "Poppins";
  padding-top: 120px;
  width: 768px;
  margin: 0px auto;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MessageIcon = styled.div`
  font-size: 50px;
  color: #ff6600;
  height: 30px;
`;

const MessageBox = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ff6600;
  h3 {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    color: #919191;
  }

  a {
    text-decoration: none;
    color: #919191;
  }
  strong {
    font-weight: bold;
  }
`;

const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0px auto 16px;
  background: rgb(255, 255, 255);
  border-radius: 5px;
`;

const TotalDiv = styled.div`
  display: flex;
  align-items: center;
  color: rgb(133, 133, 133);
  font-weight: 500;
  font-size: 20px;
  padding: 16px;
  border-bottom: 1px solid rgb(230, 230, 230);

  strong {
    margin-left: 6px;
    color: rgb(2, 153, 5);
    font-weight: bold;
  }
`;

const DivEndereco = styled.form`
  display: flex;
  align-items: center;
  color: rgb(133, 133, 133);
  font-weight: 500;
  font-size: 20px;
  padding: 16px;
  border-bottom: 1px solid rgb(230, 230, 230);
  color: #ff6600;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h5 {
    font-size: 14px;
    color: #ff6600;
    margin-top: 10px;
  }
`;

const InputBox = styled.div`
  margin-top: 10px;
  input + input {
    margin-left: 8px;
  }

  input {
    height: 30px;
    width: 280px;
    background-color: rgb(245, 245, 245);
    border: 1px solid rgb(127, 133, 141);
    border-radius: 5px;
    padding-left: 10px;
  }

  input:nth-child(2) {
    width: 80px;
  }
  input:nth-child(3) {
    width: 120px;
  }
`;

const ProductsListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonBox = styled.div`
  margin-block: 40px;
  display: flex;
  justify-content: space-around;
`;

const InfosBox = styled.div``;

const Discount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-top: 1px solid rgb(230, 230, 230);
  border-bottom: 1px solid rgb(230, 230, 230);

  h4 {
    color: rgb(54, 93, 174);
    font-weight: bold;
    font-size: 20px;
  }

  div {
    text-align: right;
  }

  div strong {
    color: rgb(125, 125, 125);
    font-weight: bold;
    font-size: 18px;
  }

  div p {
    color: rgb(125, 125, 125);
    font-size: 14px;
  }
`;

const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 16px;

  h4 {
    font-size: 16px;
    color: rgb(54, 93, 174);
    font-weight: bold;
  }

  div {
    text-align: right;
  }

  div strong {
    color: rgb(125, 125, 125);
    font-weight: bold;
    font-size: 18px;
  }

  div p {
    color: rgb(125, 125, 125);
    font-size: 14px;
  }
`;
