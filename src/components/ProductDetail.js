import '../css/ProductDetail.css'; 
import React from "react";
import { Link } from "react-router-dom";


export default function ProductDetails({item}) {
    return (
        <Link to={`/inventoryItem/${item.SKU}`}>
            <div className="item-container" >
                <h2 className="item-name">Name: {item.name}</h2>
                <img className="item-image">{item.image} alt={item.name}</img>
                <p className="item-sku">SKU : No.{item.SKU}</p>
                <p className="item-qty">Quantity: {item.qty}</p> 
                <p className="item-price">Price: ${item.price}</p>
                <button>Home</button>
            </div>
        </Link>
    );
};