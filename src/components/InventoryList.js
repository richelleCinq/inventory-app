

export default function InventoryList() {
    return (
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
    )
}