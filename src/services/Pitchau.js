import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createHeaders() {
	const auth = JSON.parse(localStorage.getItem('pitchau'));
	const config = {
		headers: {
			Authorization: `Bearer ${auth.token}`,
		},
	};

	return config;
}

async function postSignUp(signUp) {
	const promise = await axios.post(`${BASE_URL}/sign-up`, signUp);
	return promise;
}

async function postSignIn(login) {
	const promise = await axios.post(`${BASE_URL}/sign-in`, login);
	return promise;
}

async function getProducts() {
	const promise = await axios.get(`${BASE_URL}/products`);
	return promise;
}

export { postSignIn, postSignUp, getProducts };
