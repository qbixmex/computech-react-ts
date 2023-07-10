import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, CircularProgress, Container, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckIcon from '@mui/icons-material/Check';
import BlockIcon from '@mui/icons-material/Block';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchProducts, deleteProduct } from '../../store/thunks';

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

const ProductsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const productsState = useAppSelector((state: RootState) => state.products);
  const { products, isLoading, isDeleting } = productsState;

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Title',
      width: 300,
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
      renderCell: (params: GridRenderCellParams) => {
        return (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="info"
              size="small"
              onClick={ () => onProductDetails(params.row.id) }
            >
              <InfoOutlinedIcon />
            </Button>
            <Button
              variant="contained"
              color="warning"
              size="small"
              onClick={ () => onEditProduct(params.row.id) }
            ><EditIcon /></Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={ () => onDeleteProduct(params.row.id) }
              disabled={ isDeleting ? true : false }
            ><DeleteOutlineIcon /></Button>
          </Box>
        );
      }
    },
  ];

  const rows = products?.map(product => ({
    id: product.id,
    title: product.title,
    slug: product.slug,
    brand: product.brand,
    price: `$ ${product.price.toFixed(2)}`,
    stock: product.stock,
    category: product.category,
    published: product.published,
  })) as ProductRow[];

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onProductDetails = (id: string) => {
    navigate(`/admin/products/${id}`);
  };

  const onCreateProduct = () => {
    navigate("/admin/products/create");
  };

  const onEditProduct = (id: string) => {
    navigate(`/admin/products/edit/${id}`);
  };

  const onDeleteProduct = (id: string) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography
          component="h1"
          variant="h1"
          sx={{ textAlign: "left", fontSize: "3rem", my: 2 }}
        >Products</Typography>
        <Button variant="contained" onClick={ onCreateProduct }>
          <AddCircleOutlineIcon />
        </Button>
      </Box>
      {
        isLoading ? ( <CircularProgress /> ) : (
          <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5, 10, 25, 50, 100]}
              disableRowSelectionOnClick
            />
          </Box>
        )
      }
    </Container>
  );
};

export default ProductsPage;