import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Sign-In/Sign-In";
import SignUp from "./Pages/Sign-Up/Sign-Up";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
