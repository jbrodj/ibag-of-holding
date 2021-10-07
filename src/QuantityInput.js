import realtime from "./firebase"
import { ref, update } from 'firebase/database'

// Updating the specific node quantity value with the value in the input on change. 
function QuantityInput ( { invItem } ) {

    const handleQtyUpdate = (e, invItem) => {

        const nodeRef = ref(realtime, invItem.key)
        //Creating the updated node value
        const updateQtyVal = {
            name: invItem.name,
            qty: Number(e.target.value)
        }
        // Updating the node value
        update(nodeRef, updateQtyVal)
    }

    return (
        <form action="">
            <label htmlFor="qtyInput" className="sr-only">Quantity of this item</label>
            <input 
                type="number" 
                id="qtyInput"
                className="qtyInput"
                onChange={ (e) => handleQtyUpdate(e, invItem)}
                value={invItem.qty}
                pattern="[0-9]"
                placeholder=""
            />
        </form>
    )
}

export default QuantityInput