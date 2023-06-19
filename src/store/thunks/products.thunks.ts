import { Dispatch } from "@reduxjs/toolkit";
import { RootState as GetState } from '../store';
import { getProducts } from '../../api/products';
import { onStartLoadingProducts, onSetProducts } from "../slices/products.slice";

export const fetchProducts = () => {
  return async (dispatch: Dispatch, getState: () => GetState) => {
    try {
      dispatch(onStartLoadingProducts());

      const localProducts = localStorage.getItem('products');

        if (!localProducts) {
          const data = await getProducts();
          const products = (data.length) ? data : [];
          dispatch(onSetProducts({ products }));
          localStorage.setItem('products', JSON.stringify(products));
        } else {
          dispatch(onSetProducts({ products: JSON.parse(localProducts) }));
        }
    } catch (error) {
      console.error(error);
    }
  };
};