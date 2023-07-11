import { ChangeEvent, useEffect, useState } from 'react';

import { Radio, Button, Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Product } from '../../interfaces';
import styles from './product-form.module.css';

type Props = {
  data: Product;
  onInputChange: ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBack: () => void,
  isSaving: boolean;
};

const ProductForm = ({data, onInputChange, onBack, isSaving}: Props) => {

  const [ disabled, setDisabled ] = useState(false);

  useEffect(() => {
    setDisabled(isSaving ? true : false);
  }, [isSaving]);

  return (
    <Grid container spacing={2} mb={4}>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            name="title"
            autoComplete="off"
            onChange={onInputChange}
            value={data.title}
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
            onChange={onInputChange}
            value={data.brand}
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
            onChange={onInputChange}
            value={data.color}
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
            onChange={onInputChange}
            value={data.price}
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
            onChange={onInputChange}
            value={data.description}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth className={styles.condition}>
          <FormLabel>Condition</FormLabel>
          <RadioGroup
            name="condition"
            onChange={onInputChange}
          >
            <FormControlLabel
              value="new"
              control={<Radio />}
              label="New"
              checked={ data.condition === "new" ? true : false }
            />
            <FormControlLabel
              value="used"
              control={<Radio />}
              label="Used"
              checked={ data.condition === "used" ? true : false }
            />
            <FormControlLabel
              value="refurbished"
              control={<Radio />}
              label="Refurbished"
              checked={ data.condition === "refurbished" ? true : false }
            />
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
            onChange={onInputChange}
            value={data.stock}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <TextField
            id="tags"
            label="tags"
            variant="outlined"
            name="tags"
            autoComplete="off"
            onChange={onInputChange}
            value={data.tags}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <TextField
            id="image"
            label="images"
            variant="outlined"
            name="image"
            autoComplete="off"
            onChange={onInputChange}
            value={data.images}
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
            onChange={onInputChange}
            value={data.category}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button
          variant="contained"
          color="primary"
          onClick={onBack}
          size="large"
          sx={{ width: { xs: "100%", md: "fit-content" } }}
          disabled={disabled}
        >
          Cancel
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
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
          disabled={disabled}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductForm;
