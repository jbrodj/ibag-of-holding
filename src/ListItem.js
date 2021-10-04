import React from 'react' 
import realtime from './firebase'
import { ref, remove, update} from 'firebase/database'

function ListItem( { invItems }) {



// console.log(invItems[0].qty)

    // Delete button event handler
    const handleDelete = (invItemKey) => {
        const nodeRef = ref(realtime, invItemKey)
        remove(nodeRef)
    }

    const handleInc = (invItemKey) => {
        // console.log(invItems)
        const nodeRef = ref(realtime, invItemKey)
        const dbRef = ref(realtime);
        console.log(dbRef)
        // const currentRef = nodeRef.val()

        // const incrementVal = {
        //     title: currentRef.title,
        //     qty: currentRef.qty + 1
        // }

        // console.log(nodeRef)
        // update(nodeRef, incrementVal)
        
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
                                        onClick={ () => handleInc(invItem.key)}
                                        >
                                        +
                                    </button>
                                    <button 
                                        className="decBtn"
                                        // onClick={ () => handleDec(invItem.key)}
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