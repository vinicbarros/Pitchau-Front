import styled from "styled-components";

export default function CartProductList({ index, img, nameProduct, price }) {
  return (
    <BoxProduct>
      <ListNumber>PRODUTO {index + 1}</ListNumber>
      <InfoProduct>
        <Image>
          <img alt="" src={img} />
        </Image>
        <div>{nameProduct}</div>
      </InfoProduct>
    </BoxProduct>
  );
}

const BoxProduct = styled.div`
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
`;

const Image = styled.div``;
