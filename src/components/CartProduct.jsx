import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function CartProduct({
	id,
	index,
	img,
	nameProduct,
	price,
	description,
}) {
	const { setClicked, clicked } = useContext(UserContext);

	return (
		<BoxProduct>
			<ListNumber>PRODUTO {index + 1}</ListNumber>
			<InfoProduct>
				<Image>
					<img alt='' src={img} />
				</Image>
				<ProductBox>
					<ProductName>{nameProduct}</ProductName>

					<DescriptionBox>
						<p>
							<span>{description}</span>
						</p>
					</DescriptionBox>
				</ProductBox>
				<h3>
					<strong>R$ {price.toFixed(2).replace('.', ',')}</strong>
				</h3>
			</InfoProduct>
		</BoxProduct>
	);
}

const BoxProduct = styled.div`
	position: relative;
	font-family: 'Poppins';
	display: flex;
	flex-direction: column;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	padding-bottom: 8px;
`;

const ListNumber = styled.div`
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	height: 39px;
	padding: 8px 16px;
	background: rgb(251, 251, 251);
	font-size: 14px;
	line-height: 18px;
	color: rgba(0, 0, 0, 0.3);
	font-weight: bold;
`;

const InfoProduct = styled.div`
	display: flex;
	flex-direction: row;
	padding: 10px 16px;
	align-items: center;
	justify-content: space-between;
	gap: 5px;
	h3 {
		color: #029905;
	}

	strong {
		font-weight: bold;
		font-size: 15px;
	}
`;

const Image = styled.div`
	img {
		width: 80px;
		height: 80px;
	}
`;

const ProductName = styled.div`
	font-size: 14px;
	width: 200px;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: rgb(51, 51, 51);
`;

const ProductBox = styled.div`
	display: flex;
	flex-direction: column;
`;

const DescriptionBox = styled.div`
	margin-top: 4px;
	width: 200px;
	h3 {
		color: #029905;
	}

	strong {
		font-weight: bold;
		font-size: 25px;
	}

	p {
		margin-top: 4px;
		color: #85858585;
		font-size: 14px;
	}

	span {
		font-weight: bold;
		font-size: 12px;
	}
`;
