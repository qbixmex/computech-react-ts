import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../interfaces';

import { products } from "../../data/products.ts";

type ProductsState = {
  products: Product[];
};

const initialState: ProductsState = {
  products: [...products],
};

const productsSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loadProducts: (state) => {
      throw new Error('Not implemented');
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    addProduct: (state, action: PayloadAction<string>) => {
      throw new Error('Not implemented');
    },
  },
});

export const { loadProducts, addProduct } = productsSlice.actions;
export default productsSlice;
