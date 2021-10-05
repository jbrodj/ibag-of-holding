import React from 'react' 
import realtime from './firebase'
import { ref, remove, update } from 'firebase/database'
// import { useState } from 'react/cjs/react.development'

function ListItem( { invItems }) {

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

    // CSS Class toggle for mobile view
    // const [isActive, setActive] = useState(true);

    // const handleToggle = () => {
    //     setActive(!isActive);
    // }

    return (
        <div className="itemContainer">
                {
                    invItems.map( (invItem) => {
                        return (
                            <li 
                                className="invItem" 
                                key={invItem.key}
                                tabIndex="0"
                                // onFocus={handleToggle}
                            >
                                <p>{invItem.title}</p>
                                <div className="qtyContainer">
                                <p>{invItem.qty}</p>
                                    <div className="qtyBtnContainer">
                                    <button 
                                        // className= { isActive ? 'mobileHidden': null }
                                        className="incBtn mobileHidden"
                                        onClick={ () => handleInc(invItem)}
                                        >
                                        +
                                    </button>
                                    <button 
                                        className="decBtn mobileHidden"
                                        onClick={ () => handleDec(invItem)}
                                    >
                                        -
                                    </button>
                                    </div>
                                    <button 
                                        className="deleteBtn mobileHidden"
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