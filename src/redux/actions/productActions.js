import { ActionTypes } from "../constants/productActionTypes";
import axios from "axios";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const products = response.data;
        dispatch(setProducts(products));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const fetchSelectedProduct = (id) => {
  return (dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        const product = response.data;
        dispatch(selectedProduct(product));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
