import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryList from "./components/InventoryList";
import InventoryItem from "./components/InventoryItem";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InventoryList />} />
        <Route path="inventoryItem/:sku" element={<InventoryItem />} />
      </Routes>
    </BrowserRouter>
  );
}
