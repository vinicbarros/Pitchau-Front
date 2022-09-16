import styled from 'styled-components';

export default function CartProduct({
	index,
	img,
	nameProduct,
	price,
	description,
}) {
	return (
		<ProductCart>
			<img src={img} alt='' />
			<TextInformation>
				<ProductName>{nameProduct}</ProductName>
				<ProductDescription>{description}</ProductDescription>
			</TextInformation>
			<ProductPrice>{price}</ProductPrice>
		</ProductCart>
	);
}

const ProductPrice = styled.div`
	height: 25px;
	width: 60px;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	font-size: 14px;
	line-height: 18px;
	color: rgb(239, 99, 50);
	font-weight: bold;
`;
const ProductName = styled.div`
	height: 25px;
	width: 200px;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	font-size: 14px;
	line-height: 18px;
	color: rgba(0, 0, 0, 1);
	font-weight: bold;
`;
const ProductDescription = styled.div`
	height: 25px;
	width: 200px;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	font-size: 14px;
	line-height: 18px;
	color: rgba(0, 0, 0, 0.3);
	font-weight: bold;
`;
const TextInformation = styled.div``;

const ProductCart = styled.div`
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	img {
		width: 80px;
		padding-left: 20px;
	}
`;
