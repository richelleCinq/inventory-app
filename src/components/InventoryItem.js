import '../css/Inventory.css'; 
import React from "react";

const api = 'https://richellecinq.github.io/inventory-app/src/models/inventory.json'; //json API url

//modeled after class Zoom example
class InventoryItem extends React.Component{
    constructor(props){
        super(props);
        this.state = { inventoryList: []}
    }

    componentDidMount(){
        fetch (api)
        .then((res) => res.json())
        .then((data) => this.setState({inventoryList : data}))
        .catch((err) => console.log(err))
    }
    

    render() {
        return (
            <>
            <h1>Limn's Chair Items Inventory</h1>
            <hr />
            <div className="container">
                {this.state.inventoryList.map((InventoryItem) => (
                <div className="item-container"  key = {InventoryItem.SKU} >
                        <p className="item-name">Name: {InventoryItem.name}</p>
                        <p className="item-sku">SKU : No.{InventoryItem.SKU}</p>
                        <p className="item-qty">Quantity: {InventoryItem.qty}</p> 
                        <p className="item-price">Price: ${InventoryItem.price}</p>
                </div>
        ))}
            </div>
            </>
        );
    }
}

export default InventoryItem;