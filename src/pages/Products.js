import Header from './components/Header'; 
import Inventory from './components/InventoryItem'; 
import Footer from './components/Footer';
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