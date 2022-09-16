import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Sign-In/Sign-In";
import SignUp from "./Pages/Sign-Up/Sign-Up";
import Products from "./components/Products";
import GlobalStyle from "./style/GlobalStyle";
import PrivatePage from "./components/PrivatePage";
import FiltredCategory from "./Pages/FiltredCategory/FiltredCategory";
import PreCart from "./Pages/PreCart/PreCart";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import Cart from "./Pages/Cart/Cart";
import CheckOut from "./Pages/CheckOut/CheckOut";

function App() {
  const [userCartList, setUserCartList] = useState([]);
  const [clicked, setClicked] = useState(true);
  const [productsList, setProductsList] = useState("");
  const [productsFiltred, setProductsFiltred] = useState("");

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
            <Route path="/products/:category" element={<FiltredCategory />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
