import { ref, push } from "@firebase/database"
import realtime from "./firebase"

// Create function and import props
function InputForm( {inputText, setInputText, invItems, setInvItems} ) {

    // function to handle text input changes
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const submitHandler = (e) => {
        console.log('wooooo submitted!!!')
        e.preventDefault()
        // The commented lines are from a tutorial - trying something else
        // setInvItems([
        //     ...invItems, {text: inputText, deleted: false}
        // ])

        // Pushing to the database
        if (inputText) {
            const dbRef = ref(realtime);

            push(dbRef, inputText);
            // set text input back to empty
            setInputText('')
        } else {
            alert('Oops! Please type the name of your object in the box.')
        }

    }

    

    return (
        <div className="wrapper">
            <h2>Enter your item here</h2>
            <form action="">
                <label htmlFor="mainInput"></label>
                <input 
                    onChange={inputTextHandler} 
                    // when input hears change, run inputTextHandler
                    value={inputText} 
                    // When updating, change value to inputText to clear the form (set to '' in submitHandler).
                    type="text" 
                    name="mainInput" 
                    className="mainInput">
                </input>
                <button onClick={submitHandler} className="submit">Gimme that item!</button>
            </form>
        </div>
    )
}

export default InputForm