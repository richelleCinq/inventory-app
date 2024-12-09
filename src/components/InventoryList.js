import '../css/Inventory.css';
import InventoryItem from './InventoryItem'; 
import React, { useEffect, useState } from "react";

const api = 'https://richellecinq.github.io/inventory-app/src/models/inventory.json'; //json API url

export default function InventoryList() {
    const [inventoryList, setInventoryList] = useState([]);


    useEffect(() => {
        fetch(api)
            .then((response) => response.json())
            .then((data) => setInventoryList(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <h1>Limn's Chair Items Inventory</h1>
            <hr />
            <div className="container">
                {inventoryList.map((item) => (
                    <InventoryItem className="item-container" key={item.SKU} item ={item}/>
                ))}
            </div>
        </>
    );
}