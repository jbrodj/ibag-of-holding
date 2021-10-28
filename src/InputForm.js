import { ref, push } from "@firebase/database"
import realtime from "./firebase"

// Section for handling user inputs in the main form element. 

// Create function and import props
function InputForm( {inputText, setInputText, loginStatus} ) {

    // function to handle text input changes on the main form input
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    // Handling the submit button on the main form
    const submitHandler = (e) => {
        e.preventDefault()

        // Pushing values to the database if there's text in the input
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
                    <input 
                        onChange={inputTextHandler} 
                        // when input hears change, run inputTextHandler
                        value={inputText} 
                        // When updating, change value to inputText to clear the form (set to '' in submitHandler).
                        type="text" 
                        name="mainInput"
                        id="mainInput"
                        className="mainInput"
                        placeholder="Enter an item to store"
                        >
                    </input>
                    <label 
                        htmlFor="mainInput"
                        className="mainLabel"
                        >
                            Enter an item to store
                    </label>
                </div>
                <button onClick={submitHandler} type="submit" className="submit">Store it!</button>
            </form>
        </div>
    )
}

export default InputForm