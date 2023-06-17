import { Route, Routes } from "react-router-dom";
import { Dashboard, Products } from "../pages";
import { TopMenu } from "../components";

const AppRouter = () => {
  return (
    <>
      <TopMenu />
      <Routes>
        <Route path="/admin/dashboard" element={ <Dashboard /> } />
        <Route path="/admin/products" element={ <Products /> } />
      </Routes>
    </>
  );
};

export default AppRouter;