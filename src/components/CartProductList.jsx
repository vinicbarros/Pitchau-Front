import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { deleteItemUserCart } from "../services/Pitchau";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { TailSpin } from "react-loader-spinner";

export default function CartProductList({
  id,
  index,
  img,
  nameProduct,
  price,
}) {
  const [loading, setLoading] = useState(false);
  const { setClicked, clicked } = useContext(UserContext);
  async function deleteItemFromCart(id) {
    console.log(id);
    try {
      setLoading(!loading);
      const deleted = await deleteItemUserCart(id);
      setLoading(!loading);
    } catch (error) {
      setLoading(!loading);
      console.log(error);
    }
  }

  return (
    <BoxProduct>
      <ListNumber>PRODUTO {index + 1}</ListNumber>
      <InfoProduct>
        <Image>
          <img alt="" src={img} />
        </Image>
        <ProductBox>
          <ProductName>{nameProduct}</ProductName>
          <StarBox>
            <AiFillStar size="1.4em" color="rgb(255, 192, 1)" />
            <AiFillStar size="1.4em" color="rgb(255, 192, 1)" />
            <AiFillStar size="1.4em" color="rgb(255, 192, 1)" />
            <AiFillStar size="1.4em" color="rgb(255, 192, 1)" />
            <AiFillStar size="1.4em" color="rgb(255, 192, 1)" />
          </StarBox>
          <PriceBox>
            <h3>
              <strong>{(price * 0.9).toFixed(2)}</strong> à vista no PIX
            </h3>
            <p>
              <span>{price.toFixed(2)}</span> em até 6x sem juros
            </p>
          </PriceBox>
        </ProductBox>
        <DeleteItemCart
          onClick={() => {
            setLoading(!loading);
            deleteItemFromCart(id);
          }}
        >
          {loading ? <TailSpin color="#ffffff" width="10" /> : <>Remover</>}
        </DeleteItemCart>
      </InfoProduct>
    </BoxProduct>
  );
}

const BoxProduct = styled.div`
  position: relative;
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 8px;
`;

const ListNumber = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 39px;
  padding: 8px 16px;
  background: rgb(251, 251, 251);
  font-size: 14px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
`;

const InfoProduct = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 16px;
`;

const Image = styled.div`
  img {
    width: 110px;
    height: 110px;
  }
`;

const ProductName = styled.div`
  font-size: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(51, 51, 51);
`;

const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StarBox = styled.div`
  margin-top: 4px;
  display: flex;
`;

const PriceBox = styled.div`
  margin-top: 4px;
  h3 {
    color: #029905;
  }

  strong {
    font-weight: bold;
    font-size: 25px;
  }

  p {
    margin-top: 4px;
    color: #85858585;
    font-size: 14px;
  }

  span {
    font-weight: bold;
    font-size: 16px;
  }
`;

const DeleteItemCart = styled.button`
  position: absolute;
  bottom: 10px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 104px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  background-color: #ff6600;
  padding: 8px 0px;
  height: 32px;
`;
