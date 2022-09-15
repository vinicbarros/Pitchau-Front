import styled from 'styled-components';

import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Product({ index, img, nameProduct, price, estoque }) {
	return (
		<>
			<Informations>
				<img src={img} alt='' />
				<TextInformations>
					<ProductName>{nameProduct}</ProductName>
					<ProductPrice>R$ {price}</ProductPrice>
					<InStock>Em estoque ({estoque})</InStock>
				</TextInformations>

				<ProductComprar>
					<AiOutlineShoppingCart color='white' size={25} />
					COMPRAR
				</ProductComprar>
			</Informations>
		</>
	);
}

const Informations = styled.div`
	width: 250px;
	height: 310px;
	border-radius: 5px;
	background-color: white;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 30px;
	position: relative;
	padding-top: 20px;
	img {
		width: 150px;
	}
`;
const ProductName = styled.div`
	font-family: 'Raleway';
	font-size: 14px;
	font-weight: 700;
	color: black;

	img {
		width: 200px;
	}
`;

const ProductPrice = styled.div`
	font-size: 20px;
	font-weight: 700;
	color: rgb(227, 82, 20);
`;
const InStock = styled.div`
	height: 18px;
	width: 100px;
	position: absolute;
	bottom: 85px;
	right: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	font-weight: 700;
	color: rgb(26, 170, 69);
	border-radius: 5px;
	font-family: 'Raleway';
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
`;

const ProductComprar = styled.div`
	font-family: 'Raleway';
	width: 200px;
	height: 50px;
	font-size: 15px;
	font-weight: 700;
	background-color: rgb(227, 82, 20);
	border-radius: 5px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	position: absolute;
	bottom: 20px;
`;

const TextInformations = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: 220px;
	height: 50px;
`;
