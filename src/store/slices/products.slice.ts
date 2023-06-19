import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../interfaces';

type ProductsState = {
  products?: Product[];
  isLoading?: boolean;
  isSaving?: boolean;
  errors?: boolean;
  formSubmitted?: boolean;
};

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  isSaving: false,
  errors: false,
  formSubmitted: false,
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
    onStartSavingProduct: (state) => {
      state.isSaving = true;
    },
    onAddProduct: (state, action: PayloadAction<Product>) => {
      state.products?.push(action.payload);
      state.isSaving = false;
    },
    onFormSubmitted: (state) => {
      state.formSubmitted = true;
      state.errors = false;
    },
    onResetFlags: (state) => {
      state.isLoading = false;
      state.isSaving = false;
      state.errors = false;
      state.formSubmitted = false;
    },
    onSetErrorFlag: (state) => {
      state.errors = true;
    },
  },
});

export const {
  onStartLoadingProducts,
  onSetProducts,
  onAddProduct,
  onStartSavingProduct,
  onFormSubmitted,
  onResetFlags,
  onSetErrorFlag,
} = productsSlice.actions;
export default productsSlice;
