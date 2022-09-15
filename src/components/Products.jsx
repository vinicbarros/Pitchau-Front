import { getProducts } from "../services/Pitchau";
import Navbar from "./Navbar";
import styled from "styled-components";
import Product from "./Product";

import { useEffect, useState } from "react";

export default function Products() {
  const [productsList, setProductsList] = useState("");
  //console.log(productsList);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsList2 = await getProducts();
        //console.log(productsList2);
        setProductsList(productsList2.data.products);
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
              id={item._id}
              key={index}
              img={item.img}
              nameProduct={item.nameProduct}
              price={item.price / 100}
            />
          ))
        )}
      </ProductListBox>
    </>
  );
}

const ProductListBox = styled.div`
  font-family: "Raleway";
  margin-top: 90px;
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;
