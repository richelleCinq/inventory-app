import Header from './Header'; 
import Inventory from './InventoryList'; 
import Footer from './Footer';
import React from "react";


export default function App() {
  return (
    <div className="main">
      <Header />
      <Inventory />
      <Footer />
    </div>
  );
}