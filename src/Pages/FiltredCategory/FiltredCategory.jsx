import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { useEffect } from 'react';
import { getProductsFiltred } from '../../services/Pitchau';
import Product from '../../components/Product';
import styled from 'styled-components';
import Categorys from '../Sign-Up/Catergorys';

export default function FiltredCategory() {
	const { category } = useParams();
	const { productsFiltred, setProductsFiltred, clicked } =
		useContext(UserContext);

	useEffect(() => {
		async function fetchData() {
			try {
				const productsFiltred2 = await getProductsFiltred(category);
				setProductsFiltred(productsFiltred2.data);
				console.log(productsFiltred);
				console.log(productsFiltred2.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, [clicked]);

	return (
		<>
			<SiteContent>
				<Navbar />
				<Categorys />
				<ProductListBox>
					{productsFiltred.length === 0 ? (
						<h1>carregando</h1>
					) : (
						productsFiltred.map((item, index) => (
							<Product
								key={index}
								img={item.img}
								nameProduct={item.nameProduct}
								price={item.price}
								estoque={productsFiltred.length}
							/>
						))
					)}
				</ProductListBox>
			</SiteContent>
		</>
	);
}
const ProductListBox = styled.div`
	width: 80vw;
	margin-top: 150px;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
`;

const SiteContent = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	background-color: rgb(3, 55, 97);
`;
