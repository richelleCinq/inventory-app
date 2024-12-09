import React from "react";
import '../css/Inventory.css'; 
// import { Link } from "react-router-dom";

export default function InventoryItem({item}) {
    return (
        <div className="container">
            <div className="item-container" >
                    <p className="item-name">Name: {item.name}</p>
                    <p className="item-sku">SKU : No.{item.SKU}</p>
                    <p className="item-qty">Quantity: {item.qty}</p> 
                    <p className="item-price">Price: ${item.price}</p>
            </div>
        </div>
    );
}