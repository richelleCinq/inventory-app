import Header from './components/Header'; 
import Inventory from './components/InventoryList'; 
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