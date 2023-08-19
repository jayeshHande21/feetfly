import axios from "axios";

export const LoginService = async ({ email, password }) => {
  return axios.post("/api/auth/login", {
    email,
    password,
  });
};

export const SignUpService = async ({ email, password, name }) => {
  return axios.post("/api/auth/signup", {
    email,
    password,
    name,
  });
};

export const GetAllProductsService = async () => axios.get("/api/products");

export const GetAllCategoriesService = async () => axios.get("/api/categories");

export const GetWishList = async ({ encodedToken }) =>
  axios.get("/api/user/wishlist", {
    headers: {
      authorization: encodedToken,
    },
  });

export const PostWishListService = async ({ product, encodedToken }) => {
  return axios.post(
    "/api/user/wishlist",
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

export const DeleteWishlistService = async ({ productId, encodedToken }) => {
  return axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const GetCartListService = async ({ encodedToken }) =>
  axios.get("/api/user/cart", {
    headers: {
      authorization: encodedToken,
    },
  });

export const PostCartService = async ({ product, encodedToken }) => {
  return axios.post(
    "/api/user/cart",
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

export const IncDecCartService = async ({ productId, encodedToken, type }) => {
  return axios.post(
    `/api/user/cart/${productId}`,
    {
      action: { type },
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};
export const DeleteCartService = async ({ productId, encodedToken }) => {
  return axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
