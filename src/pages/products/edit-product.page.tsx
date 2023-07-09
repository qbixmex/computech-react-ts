import { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { RootState } from '../../store';
import { onResetFlags } from '../../store/slices';
import { useNavigate, useParams } from 'react-router-dom';

import { Container, Typography, Radio, Button, Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateProduct } from '../../store/thunks/products.thunks';
import { Product } from '../../interfaces';
import { createSlug } from '../../helpers';
import styles from './create-page.module.css';

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
  published: false,
};

const EditProductPage = () => {

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { formSubmitted, errors, isSaving, products } = useAppSelector((state: RootState) => state.products);
  const navigate = useNavigate();
  const [ FormData, setFormData ] = useState<Product>(INITIAL_DATA);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormData({
      ...FormData,
      [name]: value
    });
  };

  const handleBack = () => {
    navigate('/admin/products', { replace: true });
  };

  const handleResetForm = () => setFormData(INITIAL_DATA);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const productToUpdate: Product = {
      ...FormData,
      slug: createSlug(FormData.title),
      price: Number(FormData.price),
      stock: Number(FormData.stock),
    };

    dispatch(updateProduct(productToUpdate));

  };

  useEffect(() => {
    const productData = products?.find(product =>  product.id === id);
    if (formSubmitted && !errors) {
      dispatch(onResetFlags());
      handleResetForm();
      navigate('/admin/products', { replace: true });
    } else if (id && productData) {
      setFormData(productData);
    } else {
      navigate('/admin/products', { replace: true });
    }
  }, [id, dispatch, errors, formSubmitted, navigate, products]);

  return (
    <Container>
      <Typography
        variant="h1"
        component="h1"
        sx={{ textAlign: "left", fontSize: "3rem", my: 2 }}
      >Edit Product</Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                name="title"
                autoComplete="off"
                onChange={ onInputChange }
                value={ FormData.title }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                id="brand"
                label="Brand"
                variant="outlined"
                name="brand"
                autoComplete="off"
                onChange={ onInputChange }
                value={ FormData.brand }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                id="color"
                label="Color"
                variant="outlined"
                name="color"
                autoComplete="off"
                onChange={ onInputChange }
                value={ FormData.color }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <TextField
              id="price"
              label="Price"
              variant="outlined"
              name="price"
              autoComplete="off"
              onChange={ onInputChange }
              value={ FormData.price }
            />
          </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                id="description"
                label="Description"
                variant="outlined"
                name="description"
                multiline
                minRows={6}
                autoComplete="off"
                onChange={ onInputChange }
                value={ FormData.description }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
          <FormControl fullWidth className={ styles.condition }>
            <FormLabel>Condition</FormLabel>
            <RadioGroup defaultValue="new" name="condition" onChange={ onInputChange }>
              <FormControlLabel value="new" control={<Radio />} label="New" />
              <FormControlLabel value="used" control={<Radio />} label="Used" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                id="stock"
                label="stock"
                variant="outlined"
                name="stock"
                autoComplete="off"
                onChange={ onInputChange }
                value={ FormData.stock }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                id="category"
                label="Category"
                variant="outlined"
                name="category"
                autoComplete="off"
                onChange={ onInputChange }
                value={ FormData.category }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={ handleBack }
              size="large"
              sx={{ width: { xs: "100%", md: "fit-content" } }}
            >Cancel</Button>
          </Grid>
          <Grid item xs={12} md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <Button
              variant="contained"
              sx={{ width: { xs: "100%", md: "fit-content" } }}
              type="submit"
              color="success"
            >Save</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EditProductPage;