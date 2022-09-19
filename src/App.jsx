import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Sign-In/Sign-In";
import SignUp from "./Pages/Sign-Up/Sign-Up";
import Products from "./Pages/Products/Products";
import GlobalStyle from "./style/GlobalStyle";
import PrivatePage from "./components/PrivatePage";
import FiltredCategory from "./Pages/FiltredCategory/FiltredCategory";
import PreCart from "./Pages/PreCart/PreCart";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import Cart from "./Pages/Cart/Cart";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Resumo from "./Pages/Resumo/Resumo";

function App() {
  const [userCartList, setUserCartList] = useState([]);
  const [clicked, setClicked] = useState(true);
  const [productsList, setProductsList] = useState("");
  const [productsFiltred, setProductsFiltred] = useState("");
  const [address, setAddress] = useState({
    address: "",
    number: "",
    CEP: "",
  });

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider
        value={{
          clicked,
          setClicked,
          productsList,
          setProductsList,
          productsFiltred,
          setProductsFiltred,
          userCartList,
          setUserCartList,
          address,
          setAddress,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/"
              element={
                <PrivatePage>
                  <Products />
                </PrivatePage>
              }
            />
            <Route
              path="/precart"
              element={
                <PrivatePage>
                  <PreCart />
                </PrivatePage>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivatePage>
                  <Cart />
                </PrivatePage>
              }
            />
            <Route
              path="/products/:category"
              element={
                <PrivatePage>
                  <FiltredCategory />
                </PrivatePage>
              }
            />
            <Route
              path="/checkout"
              element={
                <PrivatePage>
                  <CheckOut />
                </PrivatePage>
              }
            />
            <Route
              path="/resumo"
              element={
                <PrivatePage>
                  <Resumo />
                </PrivatePage>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
