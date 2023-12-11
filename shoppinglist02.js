const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const ClearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

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

    checkUI();

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

//This creates the icons for the delete button 
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon 
}

//This deletes an item in the list when the delete button is clicked 
function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
       if (confirm('Are you sure?')) {
        e.target.parentElement.parentElement.remove();

        checkUI();
       }
    }
}

//When the clear all button is clicked, all items are deleted 
function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    checkUI();
}

function checkUI() {
    const items = itemList.querySelectorAll('li');
    if (itemList.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}

//Event Listeners Below 
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
ClearBtn.addEventListener('click', clearItems);
