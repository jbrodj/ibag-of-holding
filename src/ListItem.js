import React from 'react' 
import realtime from './firebase'
import { ref, remove} from 'firebase/database'

function ListItem( { invItems }) {


    // Delete button event handler
    const handleDelete = (invItemKey) => {
        const nodeRef = ref(realtime, invItemKey)
        remove(nodeRef)
    }

    return (
        <div className="itemContainer">
                {
                    invItems.map( (invItem) => {
                        return (
                            <li 
                                className="invItem" 
                                key={invItem.key}
                            >
                                <p>{invItem.title}</p>
                                <button 
                                    className="deleteBtn"
                                    onClick={ () => handleDelete(invItem.key)}
                                    > 
                                    <i className="fas fa-trash"></i>
                                    </button>
                            </li>
                        )
                    })
                }
        </div>
    )
}

export default ListItem