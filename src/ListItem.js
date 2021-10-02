function ListItem() {

    return (
        <div className="itemContainer">
            <li className="invItem">
                <p>Woah this item is so kewl</p>
                <button className="deleteBtn"> <i className="fas fa-trash"></i> </button>
            </li>
        </div>
    )
}

export default ListItem