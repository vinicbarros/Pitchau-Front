import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { useEffect } from 'react';
import { getProductsFiltred } from '../../services/Pitchau';
import Product from '../../components/Product';
import styled from 'styled-components';

export default function FiltredCategory() {
	const { category } = useParams();
	const { productsFiltred, setProductsFiltred } = useContext(UserContext);

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
	}, []);

	return (
		<>
			<SiteContent>
				<Navbar />
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
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;