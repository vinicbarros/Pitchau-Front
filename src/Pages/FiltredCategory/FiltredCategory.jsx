import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { useEffect } from 'react';
import { getProductsFiltred } from '../../services/Pitchau';
import Product from '../../components/Product';
import styled from 'styled-components';
import Categorys from '../../components/Catergorys';
import Loading from '../../components/Loading';

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
				{productsFiltred.length === 0 ? (
					<></>
				) : (
					<WrapTitle>
						<h1>PRODUTOS</h1>
					</WrapTitle>
				)}
				<ProductListBox>
					{productsFiltred.length === 0 ? (
						<Loading />
					) : (
						productsFiltred.map((item, index) => (
							<Product
								id={item._id}
								key={index}
								img={item.img}
								nameProduct={item.nameProduct}
								price={item.price / 100}
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
	font-family: 'Poppins';
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
`;

const WrapTitle = styled.div`
	height: 66px;
	border-radius: 2px;
	background-color: #ff6500;
	display: flex;
	align-items: center;

	h1 {
		font-size: 20px;
		color: #ffffff;
		font-weight: bold;
		margin-left: 20px;
	}
`;
