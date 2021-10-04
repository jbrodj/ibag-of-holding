import { ref, push } from "@firebase/database"
import realtime from "./firebase"

// Create function and import props
function InputForm( {inputText, setInputText} ) {

    // function to handle text input changes
    const inputTextHandler = (e) => {
        // console.log(e.target.value)
        setInputText(e.target.value)
    }

    const submitHandler = (e) => {
        // console.log('wooooo submitted!!!')
        e.preventDefault()

        // Pushing to the database
        if (inputText) {
            const dbRef = ref(realtime);
            
            push(dbRef, {
                qty: 1,
                name: inputText
            } );
            // set text input back to empty
            setInputText('')
        } else {
            alert('Oops! Please type the name of your object in the box.')
        }

    }


    return (
        <div className="wrapper">
            <form action="">
                <div className="inputContainer">
                    <label 
                        htmlFor="mainInput"
                        className="sr-only"
                        >
                            Enter an item to store in your bag
                        </label>
                    <input 
                        onChange={inputTextHandler} 
                        // when input hears change, run inputTextHandler
                        value={inputText} 
                        // When updating, change value to inputText to clear the form (set to '' in submitHandler).
                        type="text" 
                        name="mainInput" 
                        className="mainInput"
                        placeholder="Enter an item to store in your bag"
                        >
                    </input>
                </div>
                <button onClick={submitHandler} className="submit">Store it!</button>
            </form>
        </div>
    )
}

export default InputForm