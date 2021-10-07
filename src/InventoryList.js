import ListItem from './ListItem.js'

// Renders the structure of the inventory list & sends props to interactive parts of the section
function InventoryList( { invItems, updateQty, setUpdateQty } ) {
    
    return (
        <div className="invDiv wrapper">
            <ul>
                <li className="listLegend">
                    <p>Item name</p>
                    <p>Quantity</p>
                </li>
                <ListItem invItems={invItems} updateQty={updateQty} setUpdateQty={setUpdateQty} />
            </ul>
        </div>
    )
}

export default InventoryList