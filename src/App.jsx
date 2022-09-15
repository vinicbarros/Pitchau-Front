import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/Sign-In/Sign-In';
import SignUp from './Pages/Sign-Up/Sign-Up';
import Products from './components/Products';
import FiltredCategory from './Pages/FiltredCategory/FiltredCategory';
import GlobalStyle from './style/GlobalStyle';
import UserContext from '../src/contexts/UserContext';
import { useState } from 'react';
import CheckOut from './Pages/CheckOut/CheckOut';

function App() {
	const [clicked, setClicked] = useState(true);
	const [productsList, setProductsList] = useState('');
	const [productsFiltred, setProductsFiltred] = useState('');
	return (
		<>
			<UserContext.Provider
				value={{
					clicked,
					setClicked,
					productsList,
					setProductsList,
					productsFiltred,
					setProductsFiltred,
				}}
			>
				<GlobalStyle />
				<BrowserRouter>
					<Routes>
						<Route path='/sign-in' element={<SignIn />} />
						<Route path='/sign-up' element={<SignUp />} />
						<Route path='/' element={<Products />} />
						<Route path='/products/:category' element={<FiltredCategory />} />
						<Route path='/checkout' element={<CheckOut />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}

export default App;
