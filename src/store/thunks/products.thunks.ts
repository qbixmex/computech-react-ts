import { Dispatch } from '@reduxjs/toolkit';
// import { RootState as GetState } from '../store';

import {
  getProductsAPI,
  createProductAPI
} from '../../api/products';

import {
  onStartLoadingProducts,
  onSetProducts,
  onAddProduct,
} from '../slices/products.slice';

import { ProductData } from '../../interfaces';

export const fetchProducts = () => {
  return async (dispatch: Dispatch/*getState: () => GetState*/) => {
    try {
      dispatch(onStartLoadingProducts());

      const data = await getProductsAPI();
      const products = (data.length) ? data : [];

      dispatch(onSetProducts({ products }));

      // const localProducts = localStorage.getItem('products');
      // if (!localProducts) {
      //   const data = await getProductsAPI();
      //   const products = (data.length) ? data : [];
      //   dispatch(onSetProducts({ products }));
      //   localStorage.setItem('products', JSON.stringify(products));
      // } else {
      //   dispatch(onSetProducts({ products: JSON.parse(localProducts) }));
      // }

    } catch (error) {
      console.error(error);
    }
  };
};

export const createProduct = (payload: ProductData) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await createProductAPI(payload);

      if (!response) {
        console.error(response);
        throw new Error("Could not save the product");
      }

      dispatch(onAddProduct(response));
    } catch (error) {
      console.error(error);
    }
  };
};