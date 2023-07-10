import { FormEvent, useEffect } from 'react';
import { RootState } from '../../store';
import { onResetFlags } from '../../store/slices';

import { Container, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector, useProductsForm } from '../../hooks';
import { createProduct } from '../../store/thunks/products.thunks';
import { Product } from '../../interfaces';
import { createSlug } from '../../helpers';
import { ProductForm } from '../../components/products';

const INITIAL_DATA: Product = {
  title: '',
  slug: '',
  brand: '',
  color: '',
  price: 0,
  description: '',
  category: '',
  stock: 0,
  condition: 'new',
  images: [],
  tags: [],
};

const CreateProductPage = () => {

  const dispatch = useAppDispatch();
  const {
    formSubmitted,
    errors,
    // TODO: isSaving,
  } = useAppSelector((state: RootState) => state.products);

  const {
    FormData, onInputChange, onBack, onResetForm
  } = useProductsForm<Product>(INITIAL_DATA);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(createProduct({
      ...FormData,
      slug: createSlug(FormData.title),
      price: Number(FormData.price),
      stock: Number(FormData.stock),
      images: ['img-1.jpg', 'img-2.jpg', 'img-3.jpg'],
    }));
  };

  useEffect(() => {
    if (formSubmitted && !errors) {
      onResetForm();
      dispatch(onResetFlags());
      onBack();
    }
  }, [dispatch, errors, formSubmitted, onBack, onResetForm]);

  return (
    <Container>
      <Typography
        variant="h1"
        component="h1"
        sx={{ textAlign: "left", fontSize: "3rem", my: 2 }}
      >Create Product</Typography>
      <form onSubmit={handleSubmit}>
        <ProductForm
          data={FormData}
          onBack={onBack}
          onInputChange={onInputChange}
        />
      </form>
    </Container>
  );
};

export default CreateProductPage;