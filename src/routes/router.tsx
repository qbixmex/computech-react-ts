import { Route, Routes } from "react-router-dom";
import { Products } from "../pages";
import { TopMenu } from "../components";

const AppRouter = () => {
  return (
    <>
      <TopMenu />
      <Routes>
        <Route path="/admin/products" element={ <Products /> } />
      </Routes>
    </>
  );
};

export default AppRouter;