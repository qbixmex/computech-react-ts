import { FormEvent, ChangeEvent, useState } from 'react';
import { Container, Typography, Radio, Button, Box } from '@mui/material';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

type FormData = {
  title: string;
  brand: string;
  color: string;
  price: string;
  description: string;
  category: string;
  stock: string;
  condition: string;
};

const INITIAL_DATA: FormData = {
  title: '',
  brand: '',
  color: '',
  price: '',
  description: '',
  category: '',
  stock: '',
  condition: 'new',
};

const CreateProductPage = () => {

  const [ FormData, setFormData ] = useState<FormData>(INITIAL_DATA);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormData({
      ...FormData,
      [name]: value
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: UPDATE Global State

    // TODO: CALL API SERVICE
    console.table(FormData);

    //* Clear Form
    setFormData(INITIAL_DATA);
  };

  return (
    <Container>
      <Typography
        variant="h1"
        component="h1"
        sx={{ textAlign: "left", fontSize: "3rem", my: 2 }}
      >Create Product</Typography>

      <form onSubmit={handleSubmit}>
        <FormControl sx={{ mb: 2 }} fullWidth>
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
        <FormControl sx={{ mb: 2 }} fullWidth>
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
        <FormControl sx={{ mb: 2 }} fullWidth>
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
        <FormControl sx={{ mb: 2 }} fullWidth>
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
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            name="description"
            multiline
            minRows={5}
            autoComplete="off"
            onChange={ onInputChange }
            value={ FormData.description }
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
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
        <FormControl fullWidth sx={{ mb: 2 }}>
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
        <FormControl
          sx={{ padding: "16px 0 8px 16px", mb: 2, border: 1, borderColor: 'hsla(0, 0%, 100%, 0.25)', borderRadius: "5px" }}
          fullWidth
        >
          <FormLabel id="condition">Condition</FormLabel>
          <RadioGroup defaultValue="new" name="condition" onChange={ onInputChange }>
            <FormControlLabel value="new" control={<Radio />} label="New" />
            <FormControlLabel value="used" control={<Radio />} label="Used" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: { xs: 'flex-start', md: 'flex-end' },
            mb: 4
          }}
        >
          <Button
            variant="contained"
            sx={{ width: { xs: "100%", md: "auto" } }}
            type="submit"
          >Create</Button>
        </Box>
      </form>
    </Container>
  );
};

export default CreateProductPage;