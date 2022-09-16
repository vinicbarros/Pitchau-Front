import styled from 'styled-components';
import CartProductList from '../../components/CartProductList';
import Navbar from '../../components/Navbar';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { TailSpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { Button } from '../PreCart/PreCart';

export default function Cart() {
	const { setUserCartList, userCartList } = useContext(UserContext);
	let sum = 0;
	sumAllproducts();
	function sumAllproducts() {
		userCartList.forEach((item) => {
			let price = item.price / 100;
			sum += price;
		});
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
								<Link to='/'>
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
							<strong> R$ {sum.toFixed(2)}</strong>
						</TotalDiv>
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
						<ButtonBox>
							<Link to='/'>
								<Button cor='branco'>CONTINUAR COMPRANDO</Button>
							</Link>
							<Link to='/checkout'>
								<Button cor='laranja'>FINALIZAR COMPRA</Button>
							</Link>
						</ButtonBox>
					</BoxContent>
				)}
			</Container>
		</>
	);
}

const Container = styled.section`
	font-family: 'Poppins';
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

const BoxContent = styled.section`
	display: flex;
	flex-direction: column;
	max-width: 1000px;
	margin: 0px auto 16px;
	background: rgb(255, 255, 255);
	border-radius: 5px;
`;

const TotalDiv = styled.div`
	display: flex;
	-webkit-box-align: center;
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

const ProductsListWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const ButtonBox = styled.div`
	margin-block: 40px;
	display: flex;
	justify-content: space-around;
`;
