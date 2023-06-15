import { Box, Button, Container, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import CheckIcon from '@mui/icons-material/Check';
import BlockIcon from '@mui/icons-material/Block';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import products from '../data/products.json';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: false,
  },
  {
    field: 'brand',
    headerName: 'Brand',
  },
  {
    field: 'price',
    headerName: 'Price',
  },
  {
    field: 'stock',
    headerName: 'Stock',
    width: 50,
  },
  {
    field: 'category',
    headerName: 'Category',
  },
  {
    field: 'published',
    headerName: 'Published',
    width: 75,
    renderCell: (params) => (
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        { params.row.published ? <CheckIcon color="success" /> : <BlockIcon color="error" /> }
      </Box>
    ),
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 250,
    renderCell: (params) => (
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" color="info"><InfoIcon /></Button>
        <Button variant="contained" color="warning"><EditIcon /></Button>
        <Button variant="contained" color="error"><DeleteIcon /></Button>
      </Box>
    )
  },
];

const rows = [
  ...products.map(product => ({
    id: product.id,
    title: product.title,
    slug: product.slug,
    brand: product.brand,
    price: `$ ${product.price.toFixed(2)}`,
    stock: product.stock,
    category: product.category,
    published: product.published,
  }))
];

const Products = () => {
  return (
    <Container>
      <Typography
        component="h1"
        variant="h1"
        sx={{ textAlign: "left", fontSize: "3rem", my: 2 }}
      >
        Products
      </Typography>

      <Box sx={{ height: 600, width: '100%' }}>
        
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
      />
    </Box>
    </Container>
  );
};

export default Products;