import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import visa from '../../assets/images/logo-da-visa-bandeira-cartao.png';
import master from '../../assets/images/mastercard-logo.png';
import boleto from '../../assets/images/boleto.png';
import pix from '../../assets/images/pix.png';
export default function CheckOut() {
	return (
		<>
			<SiteContent>
				<Navbar />
				<CheckOutContent>
					<Resumo></Resumo>
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
								<PriceParcelas>A vista no pix: ~Price x 0.9~</PriceParcelas>
								<PriceParcelas>Até 6x sem juros:</PriceParcelas>
								<PriceParcelas>02x de ~price/2~</PriceParcelas>
								<PriceParcelas>03x de ~price/3~</PriceParcelas>
								<PriceParcelas>04x de ~price/4~</PriceParcelas>
								<PriceParcelas>05x de ~price/5~</PriceParcelas>
								<PriceParcelas>06x de ~price/6~</PriceParcelas>
								<PriceParcelas>07x de ~price x 1.10 / 7~</PriceParcelas>
								<PriceParcelas>08x de ~price x 1.15 / 8~</PriceParcelas>
								<PriceParcelas>09x de ~price x 1.20 / 9~</PriceParcelas>
								<PriceParcelas>10x de ~price x 1.25 / 10~</PriceParcelas>
								<PriceParcelas>11x de ~price x 1.30 / 11~</PriceParcelas>
								<PriceParcelas>12x de ~price x 1.35 / 12~</PriceParcelas>
							</Parcelas>
						</PaymentContent>
					</Pagamento>
				</CheckOutContent>
			</SiteContent>
		</>
	);
}
const PriceParcelas = styled.h1`
	height: 18px;
	width: 180px;
	margin-left: 5px;
	bottom: 85px;
	right: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 12px;
	font-weight: 700;
	color: rgb(55, 65, 58);
	border-radius: 3px;

	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
	font-family: Helvetica;
`;

const PaymentContent = styled.h1`
	gap: 10px;
	width: 680px;
	height: 300px;
	display: flex;
	justify-content: center;
`;

const Parcelas = styled.h1`
	width: 220px;
	height: 250px;
	//box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
	//background-color: blue;
`;
const PayBox = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 50px;
	border-radius: 5px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
	img {
		width: 90px;
		height: 45px;
		object-fit: contain;
	}
`;
const PaymentFlags = styled.h1`
	width: 100px;
	height: 250px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	//background-color: red;
`;

const ClientData = styled.h1`
	width: 225px;
	height: 250px;
	display: flex;
	flex-direction: column;
	//background-color: green;

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
		margin-bottom: 5px;
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
	margin-top: 100px;
	width: 600px;
	height: 250px;
	background-color: white;
	border-radius: 5px;
`;
const Pagamento = styled.h1`
	padding-top: 10px;
	font-family: 'Raleway';
	font-size: 14px;
	font-weight: 700;
	margin-top: 10px;
	width: 600px;
	height: 300px;
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
	flex-direction: column;
	width: 80vw;
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: flex-start;
	align-items: center;
	background-color: rgb(3, 70, 124);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;
