import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Sign-In/Sign-In";
import SignUp from "./Pages/Sign-Up/Sign-Up";
import Products from "./components/Products";
import GlobalStyle from "./style/GlobalStyle";
import PrivatePage from "./components/PrivatePage";
import PreCart from "./Pages/PreCart/PreCart";
import UserContext from "./context/userContext";
import { useState } from "react";
import Cart from "./Pages/Cart/Cart";

function App() {
  const [userCartList, setUserCartList] = useState([]);
  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ userCartList, setUserCartList }}>
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
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
