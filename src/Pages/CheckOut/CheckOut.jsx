import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import visa from '../../assets/images/logo-da-visa-bandeira-cartao.png';
import master from '../../assets/images/mastercard-logo.png';
import boleto from '../../assets/images/boleto.png';
import pix from '../../assets/images/pix.png';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import CartProduct from '../../components/CartProduct';

export default function CheckOut() {
	const { setUserCartList, userCartList } = useContext(UserContext);
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

	return (
		<>
			<SiteContent>
				<Navbar />
				<CheckOutContent>
					<Resumo>
						{userCartList.map((product, key) => (
							<CartProduct
								key={key}
								index={key}
								img={product.img}
								nameProduct={product.name}
								price={product.price / 100}
								description={product.description}
							/>
						))}
					</Resumo>
					<RightSide>
						<Pagamento>
							<h1>Escolha o método de pagamento:</h1>
							<PaymentContent>
								<PaymentFlags>
									<PayBox>
										<img src={visa} alt='oi' />
									</PayBox>
									<PayBox>
										<img src={master} alt='oi' />
									</PayBox>
									<PayBox>
										<img src={boleto} alt='oi' />
									</PayBox>
									<PayBox>
										<img src={pix} alt='oi' />
									</PayBox>
								</PaymentFlags>
								<ClientData>
									<h1>Dados do Cartão:</h1>
									<input
										//autoComplete="off"
										type='text'
										//name="name"
										//value={userSignUp.name}
										//onChange={handleSignUp}
										placeholder='Número do Cartão'
										required
									/>
									<input
										// autoComplete="off"
										type='Validade'
										//name='Validade'
										//value={userSignUp.email}
										// onChange={handleSignUp}
										placeholder='Validade'
										// required
									/>
									<input
										// autoComplete="off"
										type='email'
										//name='Código de segurança'
										//value={userSignUp.email}
										// onChange={handleSignUp}
										placeholder='Código de segurança'
										// required
									/>
									<h1>Endereço de entrega:</h1>

									<input
										//autoComplete="off"
										type='text'
										//name="name"
										//value={userSignUp.name}
										//onChange={handleSignUp}
										placeholder='Rua/Avanida/Travessa'
										required
									/>
									<input
										// autoComplete="off"
										type='Validade'
										//name='Validade'
										//value={userSignUp.email}
										// onChange={handleSignUp}
										placeholder='Número'
										// required
									/>
									<input
										// autoComplete="off"
										type='email'
										//name='Código de segurança'
										//value={userSignUp.email}
										// onChange={handleSignUp}
										placeholder='Cep'
										// required
									/>
								</ClientData>
								<Parcelas>
									<PriceParcelas>
										À vista no pix: {(total * 0.9).toFixed(2)}
									</PriceParcelas>
									<PriceParcelas>Até 6x sem juros:</PriceParcelas>
									<PriceParcelas>02x de {(total / 2).toFixed(2)}</PriceParcelas>
									<PriceParcelas>03x de {(total / 3).toFixed(2)}</PriceParcelas>
									<PriceParcelas>04x de {(total / 4).toFixed(2)}</PriceParcelas>
									<PriceParcelas>05x de {(total / 5).toFixed(2)}</PriceParcelas>
									<PriceParcelas>06x de {(total / 6).toFixed(2)}</PriceParcelas>
									<PriceParcelas>
										07x de {((total * 1.1) / 7).toFixed(2)}
									</PriceParcelas>
									<PriceParcelas>
										08x de {((total * 1.15) / 8).toFixed(2)}
									</PriceParcelas>
									<PriceParcelas>
										09x de {((total * 1.2) / 9).toFixed(2)}
									</PriceParcelas>
									<PriceParcelas>
										10x de {((total * 1.25) / 10).toFixed(2)}
									</PriceParcelas>
									<PriceParcelas>
										11x de {((total * 1.3) / 11).toFixed(2)}
									</PriceParcelas>
									<PriceParcelas>
										12x de {((total * 1.35) / 12).toFixed(2)}
									</PriceParcelas>
								</Parcelas>
							</PaymentContent>
						</Pagamento>
						<Total>
							<h1>Total</h1>
							<h1>R$ {total}</h1>
						</Total>
					</RightSide>
				</CheckOutContent>
			</SiteContent>
		</>
	);
}

const RightSide = styled.h1`
	height: 100vh;
	width: 600px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Total = styled.h1`
	padding: 10px;
	height: 60px;
	width: 400px;
	background-color: white;
	border-radius: 5px;
	font-weight: 700;
	display: flex;
	justify-content: space-between;
	align-items: center;

	h1 {
		color: rgb(3, 70, 124);
		margin-bottom: 5px;
		font-size: 30px;
	}
`;

const PriceParcelas = styled.div`
	padding-left: 15px;
	height: 20px;
	width: 180px;
	margin-left: 5px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 12px;
	font-weight: 700;
	color: rgb(239, 99, 50);
	border-radius: 3px;
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
	font-family: Helvetica;
`;

const PaymentContent = styled.div`
	gap: 10px;
	width: 600px;
	height: 400px;
	display: flex;
	justify-content: center;
`;

const Parcelas = styled.div`
	display: flex;
	gap: 3px;
	flex-direction: column;
	width: 220px;
	height: 400px;
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

const Resumo = styled.h1`
	margin-top: 110px;
	width: 400px;
	background-color: white;
	border-radius: 5px;
`;
const Pagamento = styled.h1`
	margin-top: 110px;
	padding-top: 10px;
	font-family: 'Raleway';
	font-size: 14px;
	font-weight: 700;
	width: 600px;
	height: 350px;
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

const SiteContent = styled.div`
	gap: 10px;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-color: rgb(3, 55, 97);
`;

const CheckOutContent = styled.div`
	display: flex;
	width: 80vw;
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	align-items: flex-start;
	background-color: rgb(3, 70, 124);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;
