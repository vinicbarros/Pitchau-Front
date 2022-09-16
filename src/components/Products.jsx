import { getProducts } from "../services/Pitchau";
import Navbar from "./Navbar";
import styled from "styled-components";
import Product from "./Product";
import Categorys from "../Pages/Sign-Up/Catergorys";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useAsyncValue } from "react-router-dom";

export default function Products() {
  const { productsList, setProductsList } = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsList2 = await getProducts();
        setProductsList(productsList2.data.products);
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
      <ProductsWrap>
        <WrapTitle>
          <h1>PRODUTOS</h1>
        </WrapTitle>
        <ProductListBox>
          {productsList.length === 0 ? (
            <h1>carregando</h1>
          ) : (
            productsList.map((item, index) => {
              const estoque = productsList.filter(
                (value) => value.nameProduct === item.nameProduct
              );
              return (
                <Product
                  id={item._id}
                  key={index}
                  img={item.img}
                  nameProduct={item.nameProduct}
                  price={(item.price / 100).toFixed(2)}
                  estoque={estoque.length}
                />
              );
            })
          )}
        </ProductListBox>
      </ProductsWrap>
    </SiteContent>
  );
}

const ProductListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const SiteContent = styled.div`
  font-family: "Poppins";
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsWrap = styled.section`
  margin-top: 200px;
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
