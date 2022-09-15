import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Sign-In/Sign-In";
import SignUp from "./Pages/Sign-Up/Sign-Up";
import Products from "./components/Products";
import GlobalStyle from "./style/GlobalStyle";
import PrivatePage from "./components/PrivatePage";
import PreCart from "./Pages/PreCart/PreCart";

function App() {
  return (
    <>
      <GlobalStyle />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
