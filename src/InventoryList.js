import ListItem from './ListItem.js'

function InventoryList( { invItems } ) {
    
    return (
        <div className="invDiv wrapper">
            <ul>
                <li className="listLegend">
                    <p>Item name</p>
                    <p>Quantity</p>
                </li>
                <ListItem invItems={invItems} />
            </ul>
        </div>
    )
}

export default InventoryList