import axios from "axios";
import { type Cartitems } from "./types";

function handleAxiosError(error: unknown) {
  if (axios.isAxiosError(error) && error.response) {
    const errorMessage = error.response.data?.message || "An error occurred";
    throw new Error(errorMessage);
  }
  throw error;
}

export function getProductList(sortBy: string, order: string, page: number) {
  let url = "https://dummyjson.com/products?limit=12";
  if (sortBy && order) {
    url += `&sortBy=${sortBy}&order=${order}`;
  }
  if (page) {
    url += `&skip=${(page - 1) * 12}`;
  }
  return axios
    .get(url)
    .then((response) => response.data)
    .catch(handleAxiosError);
}

export function getProduct(id: number) {
  return axios
    .get(`https://dummyjson.com/products/${id}`)
    .then((response) => response.data)
    .catch(handleAxiosError);
}

export function searchProducts(
  query: string,
  sortBy: string,
  order: string,
  page: number
) {
  let url = `https://dummyjson.com/products/search?q=${query}&limit=12`;
  if (sortBy && order) {
    url += `&sortBy=${sortBy}&order=${order}`;
  }
  if (page) {
    url += `&skip=${(page - 1) * 12}`;
  }
  return axios
    .get(url)
    .then((response) => response.data)
    .catch(handleAxiosError);
}

export function getProductIds(sortBy: string, order: string) {
  let url = "https://dummyjson.com/products?limit=0&select=id";
  if (sortBy && order) {
    url += `&sortBy=${sortBy}&order=${order}`;
  }
  return axios
    .get(url)
    .then((response) => response.data)
    .catch(handleAxiosError);
}

export function searchProductIds(query: string, sortBy: string, order: string) {
  let url = `https://dummyjson.com/products/search?q=${query}&limit=0&select=id`;
  if (sortBy && order) {
    url += `&sortBy=${sortBy}&order=${order}`;
  }
  return axios
    .get(url)
    .then((response) => response.data)
    .catch(handleAxiosError);
}

export function signupUser(firstName: string, email: string, password: string) {
  const url = "https://r5ftltl6sj.execute-api.us-east-1.amazonaws.com/signup";
  const data = {
    firstName,
    email,
    password,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    validateStatus: () => true,
  };

  return axios
    .post(url, data, config)
    .then((response) => {
      if (response.status >= 400) {
        const errorMessage = response.data?.message || "An error occurred";
        throw new Error(errorMessage);
      }
      return response.data;
    })
    .catch(handleAxiosError);
}

export function signInUser(email: string, password: string) {
  const url = "https://r5ftltl6sj.execute-api.us-east-1.amazonaws.com/signin";
  const data = {
    email,
    password,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    validateStatus: () => true,
  };

  return axios
    .post(url, data, config)
    .then((response) => {
      if (response.status >= 400) {
        const errorMessage = response.data?.message || "An error occurred";
        throw new Error(errorMessage);
      }
      return response.data;
    })
    .catch(handleAxiosError);
}

export function getAuthUser(token: string) {
  const url = "https://r5ftltl6sj.execute-api.us-east-1.amazonaws.com/me";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    validateStatus: () => true,
  };

  return axios
    .get(url, config)
    .then((response) => {
      if (response.status >= 400) {
        const errorMessage = response.data?.message || "An error occurred";
        throw new Error(errorMessage);
      }
      return response.data;
    })
    .catch(handleAxiosError);
}

export function saveCart(cart: Cartitems, token: string) {
  const url = "https://r5ftltl6sj.execute-api.us-east-1.amazonaws.com/cart";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    validateStatus: () => true,
  };

  return axios
    .post(url, cart, config)
    .then((response) => {
      if (response.status >= 400) {
        const errorMessage = response.data?.message || "An error occurred";
        throw new Error(errorMessage);
      }
      return response.data;
    })
    .catch(handleAxiosError);
}

export function getCart(token: string) {
  const url = "https://r5ftltl6sj.execute-api.us-east-1.amazonaws.com/cart";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    validateStatus: () => true,
  };

  return axios
    .get(url, config)
    .then((response) => {
      if (response.status >= 400) {
        const errorMessage = response.data?.message || "An error occurred";
        throw new Error(errorMessage);
      }
      return response.data;
    })
    .catch(handleAxiosError);
}
