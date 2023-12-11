const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;
    // Validates input by user
    if (newItem === '') {
        alert('Please type an item');
        return;
    }

    //Create list item 
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    
    li.appendChild(button);
    
    itemList.appendChild(li);

itemInput.value = '';
}

//This creates the delete buttons for list items 
function createButton(classes) {
    const button = document.createElement('button')
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon 
}

//Event Listeners Below 
itemForm.addEventListener('submit',addItem);