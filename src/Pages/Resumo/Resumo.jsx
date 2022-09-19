import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import CartProduct from "../../components/CartProduct";
import { BsPatchCheck } from "react-icons/bs";
import { Button } from "../PreCart/PreCart";
import { Link } from "react-router-dom";

export default function Resumo() {
  const { userCartList, address } = useContext(UserContext);

  return (
    <>
      <SiteContent>
        <Header>
          <BsPatchCheck color="rgb(2, 153, 5)" size={150} />
          <h1>Compra finalizada!</h1>
        </Header>
        <Mensagem>
          <h1>
            Seu pedido está pronto e será entregue em breve no endereço
            cadastrado abaixo:
          </h1>
          <Endereco>
            <h3>ENDEREÇO:</h3>
            <p>
              {address.address}, {address.number}, {address.CEP}
            </p>
          </Endereco>
          <ResumoCompra>
            <p>Resumo do pedido: </p>
            {userCartList.map((product, key) => (
              <CartProduct
                id={product._id}
                key={key}
                index={key}
                img={product.img}
                nameProduct={product.name}
                price={product.price / 100}
                description={product.description}
              />
            ))}
          </ResumoCompra>
          <Link to="/">
            <Button cor="laranja">VOLTAR PARA A HOME</Button>
          </Link>
        </Mensagem>
      </SiteContent>
    </>
  );
}
const SiteContent = styled.div`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 35px;
    color: #42464d;
    font-weight: bold;
    font-size: 40px;
    border-bottom: 1px solid rgb(230, 230, 230);
  }
  margin-bottom: 35px;
`;

const Mensagem = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
`;
const Endereco = styled.div`
  margin-top: 30px;
  width: 400px;
  height: 30px;
  font-size: 16px;
  font-weight: 700;
  text-align: left;

  h3 {
    color: #ff6500;
    text-align: center;
    font-size: 32px;
    border-bottom: 1px solid rgb(230, 230, 230);
  }

  p {
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
  }
`;
const ResumoCompra = styled.div`
  margin-top: 50px;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  p {
    margin-top: 30px;
    color: #ff6500;
    text-align: center;
    font-size: 32px;
    border-bottom: 1px solid rgb(230, 230, 230);
  }
`;
