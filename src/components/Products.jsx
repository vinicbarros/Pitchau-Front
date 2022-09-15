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
                price={item.price}
                estoque={estoque.length}
              />
            );
          })
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
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgb(3, 55, 97);
`;
