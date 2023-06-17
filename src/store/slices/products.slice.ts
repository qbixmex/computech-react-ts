import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../interfaces';

type ProductsState = {
  products?: Product[];
  isLoading?: boolean;
  isSaving?: boolean;
};

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  isSaving: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    onStartLoadingProducts: (state) => {
      state.isLoading = true;
    },
    onSetProducts: (state, action: PayloadAction<ProductsState>) => {
      state.isLoading = false;
      state.products = action.payload.products;
    },
    fetchProducts: (state) => {
      throw new Error('Not implemented');
    },
    addProduct: (state, action: PayloadAction<string>) => {
      throw new Error('Not implemented');
    },
  },
});

export const {
  fetchProducts,
  onStartLoadingProducts,
  onSetProducts,
  addProduct
} = productsSlice.actions;
export default productsSlice;
