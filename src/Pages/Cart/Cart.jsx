import styled from 'styled-components';
import CartProductList from '../../components/CartProductList';
import Navbar from '../../components/Navbar';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function Cart() {
	const { setUserCartList, userCartList } = useContext(UserContext);
	console.log(userCartList);

	return (
		<>
			<Navbar />
			<Container>
				<BoxContent>
					<TotalDiv>
						Total no carrinho ( {userCartList.length} itens ):
						<strong> R$ PREÇO</strong>
					</TotalDiv>
					<ProductsListWrap>
						{userCartList.map((product, key) => (
							<CartProductList
								key={key}
								index={key}
								img={product.img}
								nameProduct={product.name}
								price={product.price / 100}
							/>
						))}
					</ProductsListWrap>
				</BoxContent>
			</Container>
		</>
	);
}

const Container = styled.section`
	font-family: 'Raleway';
	padding-top: 100px;
	width: 100vw;
	margin: 0px auto;
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
