import styled from 'styled-components';
import Category from '../../components/Category';

export default function Categorys() {
	return (
		<CategoryBar>
			<Category name='Monitores' />
			<Category name='HeadSet' />
			<Category name='Placas de vídeo' />
			<Category name='Mouse gamer' />
		</CategoryBar>
	);
}

const CategoryBar = styled.h1`
	position: fixed;
	top: 70px;
	width: 100vw;
	height: 30px;
	display: flex;
	justify-content: center;
	gap: 2px;
`;
