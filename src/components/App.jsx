import { lazy } from "react";
import { Routes, Route } from "react-router-dom";




import { Layout } from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home"));
const Catalog = lazy(()=>import ("../pages/Catalog/Catalog"))

export const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          {/* <Route path="/favorites" element={<Favorites />} /> */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
  );
};
