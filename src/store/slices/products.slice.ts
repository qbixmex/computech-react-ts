import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../interfaces';

type ProductsState = {
  products?: Product[];
  isLoading?: boolean;
  isSaving?: boolean;
  isDeleting?: boolean;
  errors?: boolean;
  formSubmitted?: boolean;
};

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  isSaving: false,
  isDeleting: false,
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
    onStartDeletingProduct: (state) => {
      state.isDeleting = true;
    },
    onAddProduct: (state, action: PayloadAction<Product>) => {
      state.products?.push(action.payload);
      state.isSaving = false;
    },
    onUpdateProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products?.map(product => (
        (product.id === action.payload.id)
          ? action.payload
          : product
      ));
      state.isSaving = false;
    },
    onDeleteProduct: (state, action: PayloadAction<{ id: string }>) => {
      state.products = state.products?.filter(product => product.id !== action.payload.id);
      state.isDeleting = false;
    },
    onFormSubmitted: (state) => {
      state.formSubmitted = true;
      state.errors = false;
    },
    onResetFlags: (state) => {
      state.isLoading = false;
      state.isSaving = false;
      state.errors = false;
      state.isDeleting = false;
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
  onUpdateProduct,
  onStartSavingProduct,
  onStartDeletingProduct,
  onDeleteProduct,
  onFormSubmitted,
  onResetFlags,
  onSetErrorFlag,
} = productsSlice.actions;
export default productsSlice;
