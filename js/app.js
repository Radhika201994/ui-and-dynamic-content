// Save references to DOM elements
const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-button');
const shoppingList = document.getElementById('shopping-list');
const feedback = document.querySelector('.feedback');

// Function to add a new item to the shopping list
function addItem() {
    // Create list-item and store output in a variable
    const newItem = document.createElement('li');
    
    // Check if user entered the value in input text-field
    if (itemInput.value.trim() !== '') {
        // Use textContent property on created list-item
        // and assign it with the value of the text written in the text-field
        newItem.textContent = itemInput.value.trim();
        
        // Append list item to unordered list
        shoppingList.appendChild(newItem);
        
        // Clear a feedback-message
        feedback.textContent = '';
        
        // Clear the text-field
        itemInput.value = '';
        
        // Put the cursor back to text-field
        itemInput.focus();
    } else {
        // Print the message nothing entered in the paragraph "feedback"
        feedback.textContent = 'Nothing entered!';
    }
}

// Register function addItem for click event on button
addButton.addEventListener('click', addItem);

// Allow pressing Enter key to add item
itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

// Focus the input field when the page loads
window.addEventListener('load', function() {
    itemInput.focus();
});