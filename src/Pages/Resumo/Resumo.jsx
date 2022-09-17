import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import CartProduct from "../../components/CartProduct";
import { BsPatchCheck } from "react-icons/bs";

export default function Resumo() {
  const { userCartList } = useContext(UserContext);

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
            <p>Endereço: Rua das boninas, Número: 106</p>
            <p>CEP: 13405-071</p>
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
        </Mensagem>
      </SiteContent>
    </>
  );
}
const SiteContent = styled.div`
  gap: 40px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

const Header = styled.div`
  gap: 10px;
  color: rgb(2, 153, 5);
  font-size: 30px;
  width: 100vw;
  height: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins";
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 100;
`;

const Mensagem = styled.div`
  margin-top: 600px;
  width: 700px;
  height: 500px;
  font-size: 20px;
  font-weight: 700;
  font-family: "Poppins";
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Endereco = styled.div`
  padding-left: 50px;
  margin-top: 30px;
  width: 400px;
  height: 30px;
  font-size: 16px;
  font-weight: 700;
  font-family: "Poppins";
  text-align: left;
`;
const ResumoCompra = styled.div`
  margin-top: 10px;
  margin-top: 30px;
  width: 400px;
  height: 100vh;
  font-size: 16px;
  font-weight: 700;
  font-family: "Poppins";
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-bottom: 10px;
  }
`;
