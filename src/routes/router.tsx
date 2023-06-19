import { Route, Routes } from "react-router-dom";
import { Dashboard, ProductsPage, ProductPage } from "../pages";
import { TopMenu } from "../components";

const AppRouter = () => {
  return (
    <>
      <TopMenu />
      <Routes>
        <Route path="/admin/dashboard" element={ <Dashboard /> } />
        <Route path="/admin/products" element={ <ProductsPage /> } />
        <Route path="/admin/products/:id" element={ <ProductPage /> } />
      </Routes>
    </>
  );
};

export default AppRouter;