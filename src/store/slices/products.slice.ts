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
    onAddProduct: (state, action: PayloadAction<Product>) => {
      state.products?.push(action.payload);
    },
  },
});

export const {
  onStartLoadingProducts,
  onSetProducts,
  onAddProduct,
} = productsSlice.actions;
export default productsSlice;
