import Navbar from "../../components/Navbar";
import styled from "styled-components";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import CartProduct from "../../components/CartProduct";
import { Link, Navigate, useNavigate } from "react-router-dom";
import arrayParcelas from "../../common/Parcelas";
import { Button } from "../PreCart/PreCart";
import { finishBuy } from "../../services/Pitchau";

export default function CheckOut() {
  const { setUserCartList, userCartList, clicado, setClicado } =
    useContext(UserContext);
  const [selectedPayment, setSelectedPayment] = useState(undefined);
  let valores = userCartList.filter((value) => value.price);
  let total = somaArray(valores);
  const [paymentsData, setPaymentsData] = useState({
    numberCard: "",
    nameCard: "",
    dateCard: "",
    cvv: "",
  });

  const navigate = useNavigate();
  function somaArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
      let aux = Number(array[i].price);
      soma += aux;
    }
    return soma;
  }

  async function removeItemsFromStoreAndFinishBuy(e) {
    e.preventDefault();

    try {
      await finishBuy({
        method: "Credit",
        payment: selectedPayment,
        numberCard: paymentsData.numberCard,
        cvv: paymentsData.cvv,
        products: userCartList,
      });
      navigate("/resumo");
    } catch (error) {
      console.log(error);
    }
  }

  function handleInputs(e) {
    let val = e.target.value;
    setPaymentsData({ ...paymentsData, [e.target.name]: val });
  }

  return (
    <>
      <Navbar />
      <Container>
        <Title>FORMA DE PAGAMENTO</Title>
        <WrapBox>
          <PaymentsType>
            <UnselectedTypes
              onClick={() => {
                alert("Forma de pagamento indisponível");
              }}
            >
              <svg
                width="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.51548 5.1526C4.54582 5.08862 4.58126 5.05531 4.61352 5.02498L4.61353 5.02498C4.62098 5.01797 4.62827 5.01112 4.63528 5.00409L5.77372 3.8643L5.77385 3.86417C6.72274 2.91434 7.67153 1.9646 8.61835 1.01354C9.11044 0.520208 9.68883 0.187017 10.3741 0.0630388C11.4794 -0.137134 12.4533 0.139234 13.288 0.894726C13.3789 0.976438 13.4643 1.06361 13.5497 1.15079C13.5818 1.18348 13.6138 1.21618 13.6461 1.24858C14.9015 2.50457 16.1556 3.76185 17.4098 5.01913L17.4115 5.02087C17.4193 5.02872 17.4275 5.03637 17.4358 5.04418C17.47 5.07617 17.5069 5.11072 17.5339 5.17197C17.5025 5.17197 17.4731 5.17213 17.445 5.17228H17.4449C17.3925 5.17256 17.3447 5.17281 17.2968 5.17197C16.3037 5.14485 15.4766 5.50646 14.781 6.21158C14.0613 6.94225 13.3358 7.66652 12.6104 8.39069L12.6102 8.39084L12.6102 8.39087C12.3048 8.69573 11.9994 9.00057 11.6945 9.30587L11.6629 9.33791C11.6317 9.36971 11.6008 9.40115 11.567 9.43114C11.3287 9.64552 10.9976 9.65198 10.7529 9.44535C10.7178 9.41518 10.685 9.38188 10.6528 9.3491L10.6527 9.34908L10.6253 9.32137L9.56114 8.25606L9.55937 8.25429C8.85027 7.54455 8.14117 6.8348 7.43322 6.12506C6.9772 5.66789 6.43874 5.36569 5.80753 5.2288C5.55762 5.17456 5.30514 5.1526 5.05008 5.15389C4.87875 5.1526 4.70742 5.1526 4.51548 5.1526ZM0.00386455 10.7084C0.0464263 10.6634 0.054063 10.6061 0.061631 10.5493L0.0644092 10.5289C0.162311 9.83667 0.439271 9.22582 0.926204 8.72733C1.48614 8.15392 2.05352 7.58683 2.6207 7.01994L2.62075 7.01989L2.621 7.01964C2.90449 6.7363 3.18793 6.453 3.47037 6.16898C3.52061 6.11862 3.56569 6.0915 3.64041 6.11733C3.6767 6.12977 3.71795 6.12802 3.7589 6.12629H3.75891C3.77319 6.12568 3.78744 6.12508 3.80143 6.12508C3.92471 6.12508 4.04785 6.12585 4.17095 6.12662H4.17104H4.17109C4.43771 6.1283 4.7041 6.12997 4.9711 6.12378C5.7131 6.1057 6.3237 6.37174 6.84412 6.90123C7.5331 7.603 8.22933 8.29806 8.92547 8.99303L8.92559 8.99315L8.92561 8.99317C9.2876 9.35455 9.64957 9.71591 10.0105 10.0782C10.2849 10.3532 10.6095 10.5173 10.9972 10.5547C11.4223 10.596 11.8011 10.4837 12.1347 10.2215C12.2158 10.1583 12.2893 10.0847 12.3614 10.0123L12.3614 10.0123L12.8154 9.55832L12.8154 9.5583C13.7216 8.65219 14.6274 7.7465 15.5303 6.83795C15.8859 6.48022 16.3058 6.25551 16.8018 6.16898C16.9391 6.14439 17.0788 6.14322 17.2175 6.14204L17.2385 6.14186C17.4402 6.141 17.6425 6.14129 17.8447 6.14158H17.845L18.1479 6.14186C18.1615 6.14186 18.1753 6.14285 18.189 6.14383C18.2197 6.14603 18.2501 6.14821 18.2768 6.13928C18.4635 6.07471 18.573 6.17932 18.6928 6.30071C19.4592 7.07419 20.2295 7.84379 20.9997 8.61339L20.9998 8.61354L21 8.61368C21.4895 9.10184 21.8141 9.68041 21.9365 10.3623C22.1362 11.4755 21.8682 12.4699 21.0876 13.2887C20.5355 13.8683 19.9669 14.4327 19.3986 14.9968L19.3984 14.9971C19.1247 15.2687 18.8512 15.5403 18.5795 15.8135C18.5241 15.869 18.4713 15.8974 18.394 15.8729C18.343 15.8562 18.2903 15.8572 18.238 15.8582C18.2323 15.8583 18.2266 15.8584 18.2209 15.8585C18.2142 15.8586 18.2075 15.8587 18.2008 15.8587L17.8647 15.8584C17.641 15.8581 17.4175 15.8578 17.1934 15.8587C16.5429 15.8612 15.9928 15.6236 15.5329 15.1639C15.0741 14.7039 14.615 14.2443 14.156 13.7849L14.154 13.7829C13.5415 13.1698 12.9292 12.5568 12.3176 11.943C11.9814 11.6059 11.5808 11.4394 11.1054 11.4536C10.6868 11.4652 10.3235 11.6098 10.0259 11.9068C9.70389 12.2284 9.38185 12.55 9.06109 12.8728C8.78428 13.1504 8.50713 13.4275 8.22995 13.7047C7.74479 14.1899 7.25954 14.6752 6.77585 15.1626C6.30051 15.6417 5.72856 15.878 5.05612 15.8767H3.8375C3.82567 15.8767 3.81346 15.8758 3.80118 15.8749C3.77469 15.873 3.74791 15.871 3.72414 15.878C3.56441 15.9258 3.47037 15.8393 3.36603 15.7347C2.58925 14.9495 1.80732 14.1682 1.02539 13.3868C0.53202 12.8948 0.215127 12.3085 0.083732 11.6227C0.0744763 11.5736 0.0672157 11.523 0.0600389 11.4731L0.0515274 11.4148C0.05176 11.3992 0.052707 11.3834 0.0536549 11.3676C0.0579556 11.2958 0.0622765 11.2238 0 11.1656C0.00386455 11.0119 0.00386455 10.8608 0.00386455 10.7084ZM4.71962 16.8482C4.65361 16.8481 4.58581 16.8479 4.5153 16.8479C4.54641 16.9134 4.58419 16.9488 4.61858 16.981C4.62691 16.9888 4.63504 16.9964 4.64283 17.0042C5.65482 18.0187 6.66939 19.0346 7.68267 20.0491L7.68423 20.0507C7.78203 20.1487 7.87943 20.2473 7.97685 20.3459C8.22587 20.5979 8.47504 20.85 8.73153 21.0942C9.31507 21.6495 10.0171 21.9504 10.8184 21.9943C11.7974 22.0473 12.654 21.7309 13.3522 21.0386C14.4014 19.9977 15.4438 18.9515 16.4863 17.9052C16.8121 17.5781 17.138 17.251 17.4641 16.9241C17.4687 16.9195 17.4741 16.9152 17.4797 16.9107C17.5022 16.8926 17.527 16.8726 17.5105 16.826C17.463 16.826 17.4153 16.8258 17.3673 16.8257C17.2709 16.8254 17.1736 16.8251 17.0764 16.826C16.9025 16.8273 16.7311 16.8053 16.5611 16.773C15.8861 16.6452 15.3167 16.3236 14.8337 15.838C14.1357 15.1374 13.4365 14.438 12.7374 13.7385C12.3875 13.3884 12.0377 13.0384 11.6879 12.6882C11.6828 12.6829 11.6777 12.6777 11.6726 12.6724C11.6364 12.6348 11.5999 12.5969 11.5604 12.5629C11.4071 12.4325 11.2319 12.386 11.0322 12.4235C10.8802 12.4532 10.7669 12.5358 10.6612 12.6417C9.6062 13.7007 8.54989 14.7584 7.49229 15.8148C7.38924 15.9181 7.28361 16.0201 7.17153 16.1131C6.56609 16.6116 5.86532 16.8415 5.08725 16.8479C4.96691 16.8488 4.84657 16.8485 4.71962 16.8482Z"
                    fill="#FF6500"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="22" height="22" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              PIX
            </UnselectedTypes>
            <UnselectedTypes
              onClick={() => {
                alert("Forma de pagamento indisponível");
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 3.66602H1.1V18.3327H0V3.66602ZM2.2 3.66602H4.4V18.3327H2.2V3.66602ZM6.6 3.66602H7.7V18.3327H6.6V3.66602ZM8.8 3.66602H12.1V18.3327H8.8V3.66602ZM13.2 3.66602H14.3V18.3327H13.2V3.66602ZM16.5 3.66602H17.6V18.3327H16.5V3.66602ZM18.7 3.66602H19.8V18.3327H18.7V3.66602ZM20.9 3.66602H22V18.3327H20.9V3.66602Z"
                  fill="#FF6500"
                ></path>
              </svg>
              BOLETO BANCÁRIO
            </UnselectedTypes>
            <CardType>
              <svg
                width="22"
                height="22"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M32.4 3H3.6C1.602 3 0.018 4.66875 0.018 6.75L0 29.25C0 31.3312 1.602 33 3.6 33H32.4C34.398 33 36 31.3312 36 29.25V6.75C36 4.66875 34.398 3 32.4 3ZM32.4 29.25H3.6V18H32.4V29.25ZM32.4 10.5H3.6V6.75H32.4V10.5Z"
                  fill="#FFFFFF"
                ></path>
              </svg>
              CARTÃO DE CRÉDITO
            </CardType>
          </PaymentsType>
        </WrapBox>
        <CreditCard onSubmit={removeItemsFromStoreAndFinishBuy}>
          <Title>CARTÃO DE CRÉDITO</Title>
          <WrapInput>
            <InputCard
              onChange={handleInputs}
              type="number"
              placeholder="Número do cartão"
              name="numberCard"
              value={paymentsData.numberCard}
              required
            ></InputCard>
            <InputCard
              onChange={handleInputs}
              type="text"
              placeholder="Nome impresso no cartão"
              name="nameCard"
              value={paymentsData.nameCard}
              required
            ></InputCard>
            <InputCard
              onChange={handleInputs}
              type="text"
              placeholder="Validade"
              name="dateCard"
              value={paymentsData.dateCard}
              required
            ></InputCard>
            <InputCard
              onChange={handleInputs}
              type="number"
              placeholder="Código de segurança"
              name="cvv"
              value={paymentsData.cvv}
              required
            ></InputCard>
          </WrapInput>
          <TitleParcelas>PARCELAS</TitleParcelas>
          <SelectParcelas
            name="parcela"
            value={selectedPayment}
            onChange={(e) => setSelectedPayment(e.target.value)}
          >
            <option value="" selected disabled hidden>
              Forma de pagamento: (Parcelado em até 6x sem juros)
            </option>
            {arrayParcelas.map((parcela, key) => {
              const valor = ((total / 100) * parcela.math)
                .toFixed(2)
                .replace(".", ",");
              const Val = `${parcela.frase} ${valor}`;
              return (
                <option value={Val} key={key}>
                  {parcela.frase} {valor}
                </option>
              );
            })}
          </SelectParcelas>
          <WrapButton>
            <Button type="submit" cor="laranja">
              PAGAR COM CARTÃO
            </Button>
          </WrapButton>
        </CreditCard>
      </Container>
    </>
  );
}

const Container = styled.section`
  font-family: "Poppins";
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #42464d;
  font-size: 30px;
  font-weight: bold;
  align-self: center;
  margin-bottom: 25px;
`;

const WrapBox = styled.main`
  margin: 0 auto;
`;

const PaymentsType = styled.div`
  display: flex;
  div + div {
    margin-left: 15px;
  }
`;

const UnselectedTypes = styled.div`
  width: 17.5rem;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(255, 101, 0);
  background-color: rgb(255, 255, 255);
  color: rgb(255, 101, 0);
  font-size: 18px;
  font-weight: 700;
  transition: background-color 0.3s ease 0s;
  border-radius: 0.25rem;

  svg {
    margin-right: 8px;
  }
`;

const CardType = styled(UnselectedTypes)`
  background-color: #ff6500;
  color: #ffffff;
`;

const CreditCard = styled.form`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 40px;
`;

const WrapInput = styled.div`
  display: flex;
  flex-direction: column;

  input + input {
    margin-top: 20px;
  }

  input::placeholder {
    font-size: 16px;
    font-weight: 600;
  }
`;

const InputCard = styled.input`
  padding: 6px;
  height: 45px;
  border: 1px solid #42464d;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  font-size: 18px;
`;

const TitleParcelas = styled(Title)`
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
`;

const SelectParcelas = styled.select`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 45px;
  border: 1px solid #42464d;
  color: #42464d;
  background-color: #ffffff;
  border-radius: 4px;
  font-weight: 500;
  font-size: 18px;
  padding-top: 10px;
`;

const WrapButton = styled.div`
  margin-top: 40px;
  margin-bottom: 300px;
  display: flex;
  justify-content: center;
`;
