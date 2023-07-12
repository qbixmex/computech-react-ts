import { ChangeEvent, useEffect, useState } from 'react';

import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { Product } from '../../interfaces';
import styles from './product-form.module.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const getStyles = (tag: string, tagName: readonly string[], theme: Theme) => {
  return {
    fontWeight:
      tagName.indexOf(tag) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

type Props = {
  data: Product;
  onInputChange: ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBack: () => void,
  isSaving: boolean;
};

const ProductForm = ({data, onInputChange, onBack, isSaving}: Props) => {

  const theme = useTheme();
  const [ tagsCollection, setTagsCollection ] = useState<string[]>([]);
  const [ disabled, setDisabled ] = useState(false);

  useEffect(() => {
    if (data.tags.length !== 0) {
      setTagsCollection(data.tags);
    }
  }, []);

  useEffect(() => {
    setDisabled(isSaving ? true : false);
  }, [isSaving]);

  const handleChange = (event: SelectChangeEvent<typeof tagsCollection>) => {
    const { target: { value } } = event;
    setTagsCollection(
      // On autofill we get a stringified value.
      (typeof value === 'string') ? value.split(',') : value,
    );
  };

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
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={tagsCollection}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={selected => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map(value => <Chip key={value} label={value} />)}
              </Box>
            )}
            MenuProps={MenuProps}
          >
          {data.tags.map(tag => (
            <MenuItem
              key={tag}
              value={tag}
              style={getStyles(tag, tagsCollection, theme)}
            >{tag}</MenuItem>
          ))}
        </Select>
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
