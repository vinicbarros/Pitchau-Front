import { getProducts } from "../../services/Pitchau";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Product from "../../components/Product";
import Categorys from "../../components/Catergorys";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Loading from "../../components/Loading";

export default function Products() {
  const { productsList, setProductsList } = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsList2 = await getProducts();
        let sorterList = productsList2.data.products.sort(sorter);
        setProductsList(sorterList);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  function sorter() {
    return Math.random() - 0.5;
  }

  return (
    <SiteContent>
      <Navbar />
      <Categorys />
      <ProductsWrap>
        {productsList.length === 0 ? (
          <></>
        ) : (
          <WrapTitle>
            <h1>PRODUTOS</h1>
          </WrapTitle>
        )}

        <ProductListBox>
          {productsList.length === 0 ? (
            <Loading />
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
                  price={(item.price / 100).toFixed(2).replace(".", ",")}
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
  width: 70%;
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
