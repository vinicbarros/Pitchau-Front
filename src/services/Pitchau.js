import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("pitchau"));
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
  const config = createHeaders();
  const promise = await axios.get(`${BASE_URL}/products`, config);
  return promise;
}

async function getProductsFiltred(string) {
  const config = createHeaders();
  const promise = await axios.get(
    `${BASE_URL}/products?category=${string}`,
    config
  );
  return promise;
}

async function postCart(id) {
  const config = createHeaders();
  const promise = await axios.post(`${BASE_URL}/cart`, id, config);
  return promise;
}

async function getCartUser() {
  const config = createHeaders();
  const promise = await axios.get(`${BASE_URL}/cart`, config);
  return promise;
}

async function deleteItemUserCart(id) {
  const config = createHeaders();
  const promise = await axios.delete(`${BASE_URL}/cart/${id}`, config);
  return promise;
}

export {
  postSignIn,
  postSignUp,
  getProducts,
  postCart,
  getCartUser,
  getProductsFiltred,
  deleteItemUserCart,
};
