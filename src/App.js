import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryList from "./components/InventoryList";
import Layout from "./components/Layout";
import ProductDetails from "./components/ProductDetail";


export default function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<InventoryList />} />
        <Route path="inventoryItem/:sku" element={<ProductDetails />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}
