import { Route, Routes } from "react-router-dom";
import { Products } from "../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/admin/products" element={ <Products /> } />
    </Routes>
  );
};

export default AppRouter;