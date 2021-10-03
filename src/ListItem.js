import React, {useState, useEffect} from 'react' 

function ListItem( { invItems }) {

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
                                <button className="deleteBtn"> <i className="fas fa-trash"></i> </button>
                            </li>
                        )
                    })
                }
        </div>
    )
}

export default ListItem