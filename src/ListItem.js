import realtime from './firebase'
import { ref, remove, update } from 'firebase/database'
import QuantityInput from './QuantityInput'


function ListItem( { invItems, updateQty, setUpdateQty }) {

    // Delete button event handler
    const handleDelete = (invItemKey) => {
        const nodeRef = ref(realtime, invItemKey)
        remove(nodeRef)
    }

    // Increment/Decrement quantity event handlers
    const handleInc = (invItem) => {
        // Grabs the reference to the node
        const nodeRef = ref(realtime, invItem.key)
        //Creating the updated node value
        const incrementVal = {
            name: invItem.name,
            qty: Number(invItem.qty) + 1
        }
        // Updating the node value
        update(nodeRef, incrementVal)  
    }
    const handleDec = (invItem) => {
        const nodeRef = ref(realtime, invItem.key)

        const decrementVal = {
            name: invItem.name, 
            qty: Number(invItem.qty) - 1
        }
        update(nodeRef, decrementVal)
    }

    return (
        <div className="itemContainer">
                {
                    invItems.map( (invItem) => {
                        return (
                            <li 
                                className="invItem" 
                                key={invItem.key}
                                tabIndex="0"
                            >
                                <p>{invItem.name}</p>
                                <div className="qtyContainer">
                                    <div>
                                        <QuantityInput updateQty={updateQty} setUpdateQty={setUpdateQty} invItem={invItem} />
                                        <div className="qtyBtnContainer">
                                            <button 
                                                className="incBtn"
                                                onClick={ () => handleInc(invItem)}
                                                >
                                                +
                                            </button>
                                            <button 
                                                className="decBtn"
                                                onClick={ () => handleDec(invItem)}
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                    <button 
                                        className="deleteBtn"
                                        onClick={ () => handleDelete(invItem.key)}
                                        > 
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
        </div>
    )
}

export default ListItem