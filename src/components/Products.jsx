import { getProducts, getProductsFiltred } from '../services/Pitchau';
import Navbar from './Navbar';
import styled from 'styled-components';
import Product from './Product';
import Categorys from '../Pages/Sign-Up/Catergorys';
import { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../../src/contexts/UserContext';

export default function Products() {
	const { productsList, setProductsList } = useContext(UserContext);

	useEffect(() => {
		async function fetchData() {
			try {
				const productsList2 = await getProducts();
				setProductsList(productsList2.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	return (
		<SiteContent>
			<Navbar />
			<Categorys />

			<ProductListBox>
				{productsList.length === 0 ? (
					<h1>carregando</h1>
				) : (
					productsList.map((item, index) => (
						<Product
							key={index}
							img={item.img}
							nameProduct={item.nameProduct}
							price={item.price}
						/>
					))
				)}
			</ProductListBox>
		</SiteContent>
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
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;
