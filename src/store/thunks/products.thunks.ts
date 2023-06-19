import { Dispatch } from '@reduxjs/toolkit';
// import { RootState as GetState } from '../store';
import Swal from 'sweetalert2';

import {
  getProductsAPI,
  createProductAPI
} from '../../api/products';

import {
  onStartLoadingProducts,
  onSetProducts,
  onAddProduct,
  onStartSavingProduct,
  onFormSubmitted,
  onResetFlags,
  onSetErrorFlag,
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
    dispatch(onStartSavingProduct());
    try {
      const data = await createProductAPI(payload);
      dispatch(onAddProduct(data));
      Swal.fire({
        position: 'center',
        title: 'OK',
        html: 'Product created successfully',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        dispatch(onFormSubmitted());
      }, 1600);
      dispatch(onResetFlags());
    } catch (error) {
      dispatch(onSetErrorFlag());
      Swal.fire('Error', String(error), 'error');
    }
  };
};