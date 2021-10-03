import ListItem from './ListItem.js'

function InventoryList( { invItems } ) {
    
    return (
        <div className="invDiv wrapper">
            <ul>
                <ListItem invItems={invItems} />
            </ul>
        </div>
    )
}

export default InventoryList