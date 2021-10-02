// Shared party inventory for D&D Party

// MVP
  // Landing page is a header with a title, and a section with a text input. 
  // User can enter text into input and submit
      // App listens for submit,
      // Stores user input string in firebase
      // App checks firebase changes
      // Dynamically create list item from for each firebase object
      // Displays each on page in a list to show the party inventory. 
      // Each list item should have a button that allows the user to remove it from the page.

// Stretch goals
  // Quantity of each item
    // Store each user submission as an object with a key/value that stores their quantity.
    // UI element with buttons that lets the user click to increment/decrement the quantity
    // possibly a text input to let the user update the quantity value
    // get object.quantity from firebase and print on each li

  // Change the order of the items
    // I have no idea how to do this, but it would be cool. 
    // Some UI element that lets the user move a list item up or down in the firebase heirarchy and update the page to reflect the new order.

  // Give the items a location property
    // Lets the party assign character names to the inventory items to show which character is currently carrying it.
    // Find a way to let the user update that property

// For later stretch goals
  // Get data from d&d5e api
    // If the user's entry exists in the 5e equipment list:
      // Use the string to qeury the api, and populate the firebase object with the json object properties. 
      // Display relevant properties on the list item. 








import './App.css';
import React, {useState} from 'react' 
import InputForm from './InputForm.js';
import InventoryList from './InventoryList.js';



function App() {

  // use state for the text in the input element 
const [inputText, setInputText] = useState('');
// use state for the 
const [invItems, setInvItems] = useState([])

// JSX for page content
  return (
    <div className="App">

      <header>
        <div className="wrapper">
          <h1>We have a bag of holding, right?</h1>
        </div>
      </header>

      <section className="formSection">
        <InputForm setInputText={setInputText} inputText={inputText} setInvItems={setInvItems} invItems={invItems}/>
      </section>

      <section className="invSection">
        <InventoryList />    
      </section>
        
      <footer>
        <p>Made by Frannie, who is so good at react, at Juno College</p>
      </footer>
    </div>
  );
}

export default App;
