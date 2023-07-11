import { FormEvent, useEffect } from 'react';
import { RootState } from '../../store';
import { onResetFlags } from '../../store/slices';
import { useParams } from 'react-router-dom';

import { Container, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector, useProductsForm } from '../../hooks';
import { updateProduct } from '../../store/thunks/products.thunks';
import { Product } from '../../interfaces';
import { createSlug } from '../../helpers';
import { ProductForm } from '../../components/products';

const INITIAL_DATA: Product = {
  id: '',
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
  createdAt: '',
  updatedAt: '',
};

const EditProductPage = () => {

  const { id } = useParams();
  const dispatch = useAppDispatch();

  const {
    formSubmitted,
    errors,
    isSaving,
    products
  } = useAppSelector((state: RootState) => state.products);
  
  const {
    FormData, setFormData, onResetForm, onInputChange, onBack,
  } = useProductsForm<Product>(INITIAL_DATA);

  useEffect(() => {
    const productData = products?.find(product =>  product.id === id);
    (id && productData) ? setFormData(productData) : onBack();
  }, []);

  useEffect(() => {
    if (formSubmitted && !errors) {
      dispatch(onResetFlags());
      onResetForm();
      onBack();
    }
  }, [formSubmitted, errors]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const tagsCollection = (typeof FormData.tags === 'string')
      ? FormData.tags.split(",")
      : FormData.tags;

    const productToUpdate: Product = {
      ...FormData,
      tags: tagsCollection,
      slug: createSlug(FormData.title),
      price: Number(FormData.price),
      stock: Number(FormData.stock),
    };

    dispatch(updateProduct(productToUpdate));
  };

  return (
    <Container>
      <Typography
        variant="h1"
        component="h1"
        sx={{ textAlign: "left", fontSize: "3rem", my: 2 }}
      >Edit Product</Typography>

      <form onSubmit={handleSubmit}>
        <ProductForm
          data={FormData}
          onBack={onBack}
          onInputChange={onInputChange}
          isSaving={isSaving ?? false}
        />
      </form>
    </Container>
  );
};

export default EditProductPage;