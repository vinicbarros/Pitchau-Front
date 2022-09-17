import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import visa from '../../assets/images/logo-da-visa-bandeira-cartao.png';
import master from '../../assets/images/mastercard-logo.png';
import boleto from '../../assets/images/boleto.png';
import pix from '../../assets/images/pix.png';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import CartProduct from '../../components/CartProduct';
import { Link } from 'react-router-dom';
import { Button } from '../PreCart/PreCart';
import PriceParcelas from '../../components/PriceParcelas';

export default function CheckOut() {
	const arrayParcelas = [
		{
			frase: 'Á vista no pix:',
			math: 0.9,
		},
		{
			frase: '01x de',
			math: 2 / 2,
		},
		{
			frase: '02x de',
			math: 2 / 4,
		},
		{
			frase: '03x de',
			math: 2 / 6,
		},
		{
			frase: '04x de',
			math: 2 / 8,
		},
		{
			frase: '05x de',
			math: 2 / 10,
		},
		{
			frase: '06x de',
			math: 2 / 12,
		},
		{
			frase: '07x de',
			math: 1.1 / 12,
		},
		{
			frase: '08x de',
			math: 1.15 / 12,
		},
		{
			frase: '09x de',
			math: 1.2 / 12,
		},
		{
			frase: '10x de',
			math: 1.25 / 12,
		},
		{
			frase: '11x de',
			math: 1.3 / 12,
		},
		{
			frase: '12x de',
			math: 1.35 / 12,
		},
	];
	const {
		setUserCartList,
		userCartList,
		clicado,
		setClicado,
		userPaymentData,
		setUserPaymentData,
	} = useContext(UserContext);

	let valores = userCartList.filter((value) => value.price);
	let total = somaArray(valores);

	function somaArray(array) {
		let soma = 0;

		for (let i = 0; i < array.length; i++) {
			let aux = Number(array[i].price);
			soma += aux;
		}

		return soma;
	}

	function handlePaymentData(e) {
		setUserPaymentData({
			...userPaymentData,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<>
			<SiteContent>
				<Navbar />
				<CheckOutContent>
					<ProductsListWrap>
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
					</ProductsListWrap>
					<RightSide>
						<Pagamento>
							<h1>Escolha o método de pagamento:</h1>
							<h1>Até 6x sem juros!</h1>
							<PaymentContent>
								<PaymentFlags>
									<PayBox>
										<img src={visa} alt='oi' />
									</PayBox>
									<PayBox>
										<img src={master} alt='oi' />
									</PayBox>
									<PayBox
										onClick={() => {
											alert('Método de pagamento indisponível no momento!');
										}}
									>
										<img src={boleto} alt='oi' />
									</PayBox>
									<PayBox
										onClick={() => {
											alert('Método de pagamento indisponível no momento!');
										}}
									>
										<img src={pix} alt='oi' />
									</PayBox>
								</PaymentFlags>
								<ClientData>
									<h1>Dados do Cartão:</h1>
									<input
										type='text'
										name='cardNumber'
										value={userPaymentData.cardNumber}
										onChange={handlePaymentData}
										placeholder='Número do cartão'
									/>
									<input
										type='text'
										name='valid'
										value={userPaymentData.valid}
										onChange={handlePaymentData}
										placeholder='Validade'
									/>
									<input
										type='text'
										name='securityCode'
										value={userPaymentData.securityCode}
										onChange={handlePaymentData}
										placeholder='Código de segurança'
									/>
									<h1>Endereço de entrega:</h1>

									<input
										type='text'
										name='adress'
										value={userPaymentData.adress}
										onChange={handlePaymentData}
										placeholder='Rua/Avanida/Travessa'
									/>
									<input
										type='text'
										name='adressNumber'
										value={userPaymentData.adressNumber}
										onChange={handlePaymentData}
										placeholder='Número'
									/>
									<input
										type='text'
										name='cep'
										value={userPaymentData.cep}
										onChange={handlePaymentData}
										placeholder='Cep'
									/>
								</ClientData>
								<Parcelas>
									{arrayParcelas.map((parcela, key) => (
										<PriceParcelas
											index={key}
											key={key}
											total={total / 100}
											frase={parcela.frase}
											math={parcela.math}
											clicado={clicado}
											setClicado={setClicado}
										/>
									))}
								</Parcelas>
							</PaymentContent>
						</Pagamento>
						<TotalDiv>
							Total no carrinho ({userCartList.length} itens):
							<strong> R$ {(total / 100).toFixed(2).replace('.', ',')}</strong>
						</TotalDiv>
						<Link to='/resumo'>
							<Button cor='laranja'>FINALIZAR COMPRA</Button>
						</Link>
					</RightSide>
				</CheckOutContent>
			</SiteContent>
		</>
	);
}

const SiteContent = styled.div`
	gap: 10px;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;
const CheckOutContent = styled.div`
	display: flex;
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	justify-content: center;
	align-items: flex-start;
	background-color: white;
`;

const ProductsListWrap = styled.div`
	margin-top: 110px;
	width: 420px;
	display: flex;
	flex-direction: column;
`;
const RightSide = styled.h1`
	color: #444141;
	height: 100vh;
	width: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`;
const Pagamento = styled.h1`
	margin-top: 110px;
	padding-top: 10px;
	font-family: 'Raleway';
	font-size: 14px;
	font-weight: 700;
	width: 600px;
	height: 400px;
	background-color: white;
	border-radius: 5px;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	img {
		height: 50px;
	}
`;

const PaymentContent = styled.div`
	gap: 10px;
	width: 600px;
	height: 400px;
	display: flex;
	justify-content: center;
	font-family: 'Poppins';
`;

const PayBox = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 50px;
	border-radius: 5px;
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 1);
	img {
		width: 90px;
		height: 45px;
		object-fit: contain;
	}
`;
const PaymentFlags = styled.div`
	width: 100px;
	height: 350px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const ClientData = styled.div`
	width: 225px;
	height: 250px;
	display: flex;
	flex-direction: column;

	h1 {
		margin-bottom: 5px;
		font-size: 12px;
	}

	input {
		margin-left: 10px;
		width: 200px;
		height: 15px;
		border-radius: 5px;
		border: 1px solid rgb(127, 133, 141);
		padding-left: 10px;
		font-size: 10px;
		font-weight: 500;
		background-color: rgb(245, 245, 245);
		margin-bottom: 8px;
	}

	input::placeholder {
		font-size: 11px;
		font-weight: 500;
		color: rgb(127, 133, 141);
	}

	input:focus {
		outline: 0.5px solid rgb(239, 99, 50);
	}
`;

const Parcelas = styled.div`
	display: flex;
	gap: 3px;
	flex-direction: column;
	width: 130px;
	height: 400px;
`;

const TotalDiv = styled.div`
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	color: rgb(133, 133, 133);
	font-weight: 500;
	font-size: 20px;
	font-family: 'Poppins';
	padding: 16px;
	border-bottom: 1px solid rgb(230, 230, 230);

	strong {
		margin-left: 6px;
		color: rgb(2, 153, 5);
		font-weight: bold;
	}
`;
