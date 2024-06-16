import "./App.css";
// import MuiButtons from "./components/MuiButtons";
// import MuiTextField from "./components/MuiTextField"
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Product from "./components/Product";
import ProductCard from "./components/ProductCard";
import ProductError from "./components/ProductError";
function App() {
  return (
    <>
      {/* <MuiButtons /> */}
      {/* <MuiTextField></MuiTextField> */}
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route
          path="/products"
          element={<Product />}
          errorElement={<ProductError />}
        ></Route>
        <Route path="/products/:id" element={<ProductCard />}></Route>
      </Routes>
    </>
  );
}

export default App;
