import { Box, Button, Container, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckIcon from '@mui/icons-material/Check';
import BlockIcon from '@mui/icons-material/Block';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { RootState } from '../store';
import { useAppDispatch, useAppSelector } from '../hooks';

type ProductRow = {
  id: string;
  title: string;
  slug: string;
  brand:string;
  price: string;
  stock: number;
  category: string;
  published: boolean;
};

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
    renderCell: (params: GridRenderCellParams) => (
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        { params.row.published ? <CheckIcon color="success" /> : <BlockIcon color="error" /> }
      </Box>
    ),
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 250,
    renderCell: (params: GridRenderCellParams) => (
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" color="info"><InfoOutlinedIcon /></Button>
        <Button variant="contained" color="warning"><EditIcon /></Button>
        <Button variant="contained" color="error"><DeleteOutlineIcon /></Button>
      </Box>
    )
  },
];

let rows: ProductRow[] = [];

const Products = () => {

  // TODO: const dispatch = useAppDispatch();
  const { products /*, isLoading, isSaving*/ } = useAppSelector((state: RootState) => state.products);

  if (products.length) {
    rows = [
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
  };

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography
          component="h1"
          variant="h1"
          sx={{ textAlign: "left", fontSize: "3rem", my: 2 }}
        >Products</Typography>
        <Button variant="contained"><AddCircleOutlineIcon /></Button>
      </Box>

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