import { useEffect, useState } from 'react';
import { RootState } from '../../store';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

import { Box, Paper, Typography, Button } from '@mui/material';
import Container from '@mui/material/Container';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import CheckIcon from '@mui/icons-material/Check';
import BlockIcon from '@mui/icons-material/Block';
import BackIcon from '@mui/icons-material/ChevronLeft';

import { Product } from '../../interfaces';

const ProductPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useAppSelector((state: RootState) => state.products);
  const [ product, setProduct ] = useState<Product|null>(null);

  useEffect(() => {
    const collection = products?.find((product) => product.id === id);
    if (id && collection) {
      setProduct(collection);
    } else {
      navigate('/admin/products', { replace: true });
    }
  }, [id, navigate, products]);

  const handleBack = () => {
    navigate('/admin/products', { replace: true });
  };

  return (
    <Container>
      <Box>
        <Typography
          component="h1"
          variant="h1"
          sx={{ textAlign: "left", fontSize: "3rem", my: 4 }}
        >Product Details</Typography>

        <TableContainer component={Paper} sx={{ border: 1, borderColor: 'gray' }}>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="column" sx={{ width: 80 }}>ID</TableCell>
                <TableCell component="td" scope="column">{product?.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="column">Title</TableCell>
                <TableCell component="td" scope="column">{product?.title}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Slug</TableCell>
                <TableCell component="td" scope="column">{product?.slug}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Brand</TableCell>
                <TableCell component="td" scope="column">{product?.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Color</TableCell>
                <TableCell component="td" scope="column">{product?.color}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Price</TableCell>
                <TableCell component="td" scope="column">{product?.price}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Description</TableCell>
                <TableCell component="td" scope="column">{product?.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Condition</TableCell>
                <TableCell component="td" scope="column">{product?.condition}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Stock</TableCell>
                <TableCell component="td" scope="column">{product?.stock}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Category</TableCell>
                <TableCell component="td" scope="column">{product?.category}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Published</TableCell>
                <TableCell component="td" scope="column">
                  {product?.published ? <CheckIcon color="success" /> : <BlockIcon color="error" />}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Images</TableCell>
                <TableCell component="td" scope="column">{product?.images.join(', ')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Tags</TableCell>
                <TableCell component="td" scope="column">{product?.tags.join(', ')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Created At</TableCell>
                <TableCell component="td" scope="column">{new Date(Number(product?.createdAt)).toString()}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">Updated At</TableCell>
                <TableCell component="td" scope="column">{new Date(Number(product?.updatedAt)).toString()}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Button
        variant="contained"
        color="primary"
        sx={{ my: 4 }}
        onClick={ handleBack }
        size="large"
      >
        <BackIcon />
      </Button>

    </Container>
  );
};

export default ProductPage;