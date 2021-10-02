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
        setInvItems([
            ...invItems, {text: inputText, deleted: false}
        ])
        // set text input back to empty
        setInputText('')
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