import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Category({ name }) {
	const navigate = useNavigate();

	function goToCategory(event) {
		event.preventDefault();

		navigate(`/products/${name}`);
	}
	return (
		<CategoryHeader onClick={goToCategory}>
			<Title>{name}</Title>
		</CategoryHeader>
	);
}

const CategoryHeader = styled.header`
	border-bottom: solid 2px rgb(0, 0, 0, 0.15);
	z-index: 110;
	font-family: 'Raleway';
	width: 10vw;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0px 0px 5px 5px;
	background-color: rgb(227, 82, 20);
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h1`
	font-size: 14px;
	font-weight: 700;
	color: #ffffff;
	display: flex;
	justify-content: center;
`;
