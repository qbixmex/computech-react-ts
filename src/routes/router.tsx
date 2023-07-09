import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  ProductsPage,
  ProductPage,
  CreateProductPage,
  EditProductPage,
} from "../pages";
import { TopMenu } from "../components";

const AppRouter = () => {
  return (
    <>
      <TopMenu />
      <Routes>
        <Route path="/admin/dashboard" element={ <Dashboard /> } />
        <Route path="/admin/products" element={ <ProductsPage /> } />
        <Route path="/admin/products/:id" element={ <ProductPage /> } />
        <Route path="/admin/products/create" element={ <CreateProductPage /> } />
        <Route path="/admin/products/edit/:id" element={ <EditProductPage /> } />
      </Routes>
    </>
  );
};

export default AppRouter;