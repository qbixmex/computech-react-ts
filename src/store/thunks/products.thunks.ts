import { Dispatch } from '@reduxjs/toolkit';
// import { RootState as GetState } from '../store';
import Swal from 'sweetalert2';

import {
  getProductsAPI,
  createProductAPI,
  updateProductAPI,
  deleteProductAPI,
} from '../../api/products';

import {
  onStartLoadingProducts,
  onSetProducts,
  onAddProduct,
  onUpdateProduct,
  onStartSavingProduct,
  onStartDeletingProduct,
  onDeleteProduct,
  onFormSubmitted,
  onSetErrorFlag,
  onResetFlags,
} from '../slices/products.slice';

import { Product, ProductData } from '../../interfaces';

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

    } catch (error) {
      dispatch(onSetErrorFlag());
      Swal.fire('Error', String(error), 'error');
    }
  };
};

export const updateProduct = (payload: Product) => {
  return async (dispatch: Dispatch) => {

    dispatch(onStartSavingProduct());

    try {
      await updateProductAPI(payload);

      dispatch(onUpdateProduct(payload));

      Swal.fire({
        position: 'center',
        title: 'OK',
        html: 'Product updated successfully',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        dispatch(onFormSubmitted());
      }, 1600);

    } catch (error) {
      dispatch(onSetErrorFlag());
      Swal.fire('Error', String(error), 'error');
    }
  };
};

export const deleteProduct = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(onStartDeletingProduct());

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    try {
      if (result.isConfirmed) {
        const data = await deleteProductAPI(id);
        if (data.ok) {
          dispatch(onDeleteProduct({ id }));
          Swal.fire(
            'Deleted!',
            'Product was deleted successfully',
            'success'
          );
        } else {
          Swal.fire(
            'Error!',
            'Product not deleted',
            'error'
          );
        }
      } else {
        dispatch(onResetFlags());
      }
    } catch(error) {
      dispatch(onSetErrorFlag());
      Swal.fire('Error', String(error), 'error');
    }
  };
};