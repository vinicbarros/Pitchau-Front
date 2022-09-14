import { getProducts } from '../services/Pitchau';
import Navbar from './Navbar';
import styled from 'styled-components';
import Product from './Product';

import { useEffect, useState } from 'react';

export default function Products() {
	const [productsList, setProductsList] = useState('');

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
		<>
			<Navbar />
			<ProductListBox>
				{productsList.length === 0 ? (
					<h1>carregando</h1>
				) : (
					productsList.map((item, index) => (
						<Product
							key={index}
							img={item.img}
							nameProduct={item.nameProduct}
						/>
					))
				)}
			</ProductListBox>
		</>
	);
}

const ProductListBox = styled.div`
	margin-top: 90px;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
`;
