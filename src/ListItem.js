import React from 'react' 
import realtime from './firebase'
import { ref, remove, update } from 'firebase/database'

function ListItem( { invItems }) {
// console.log(invItems[0].qty)

    // Delete button event handler
    const handleDelete = (invItemKey) => {
        const nodeRef = ref(realtime, invItemKey)
        remove(nodeRef)
    }

    const handleInc = (invItem) => {
        // Grabs the reference to the node
        const nodeRef = ref(realtime, invItem.key)
        //Creating the updated node value
        const incrementVal = {
            title: invItem.title,
            qty: invItem.qty + 1
        }
        // Updating the node value
        update(nodeRef, incrementVal)  
    }

    const handleDec = (invItem) => {
        const nodeRef = ref(realtime, invItem.key)

        const decrementVal = {
            title: invItem.title, 
            qty: invItem.qty - 1
        }
        update(nodeRef, decrementVal)
    }


    return (
        <div className="itemContainer">
                {
                    invItems.map( (invItem) => {
                        // console.log(invItem)
                        return (
                            <li 
                                className="invItem" 
                                key={invItem.key}
                            >
                                <p>{invItem.title}</p>
                                <div className="qtyContainer">
                                <p>{invItem.qty}</p>
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