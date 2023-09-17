const initialItems = [
    {
        name: "Refactoring",
        author: "Martin Fowler",
        topic: "Programming"
    },
    {
        name: "Design Data-Intensive Applications",
        author: "Martin Kleppmann",
        topic: "Database"
    },
    {
        name: "The Phoenix Project",
        author: "Gene Kim",
        topic: "DevOps"
    }
];

if (!localStorage.getItem('books')) {
    localStorage.setItem('books', JSON.stringify(initialItems));
}

function addItemToLocalStorage(item) {
    let items = [];

    if (localStorage.getItem('books')) {
        // if have data in localstorage, get from it
        items = JSON.parse(localStorage.getItem('books'));
    }

    // add new item
    items.push(item);

    // save list updated to local storage
    localStorage.setItem('books', JSON.stringify(items));
}

function saveItemsToLocalStorage(items) {
    localStorage.setItem('books', JSON.stringify(items));
}

function loadItemsFromLocalStorage() {
    // Check if there is book data in local storage
    if (localStorage.getItem('books')) {
        // Get the book data from local storage and convert it into an array
        const books = JSON.parse(localStorage.getItem('books'));

        // get object table
        const bookTable = document.getElementById('book-table');
        // Delete all current rows in the table except the header row
        while (bookTable.rows.length > 1) {
            bookTable.deleteRow(1);
        }

        // iterate through the books array and add each book to the table
        for (const book of books) {
            // Create a new row
            const newRow = bookTable.insertBefore(document.createElement('tr'), bookTable.childNodes[0])
            bookTable.insertAdjacentElement('beforeend', newRow);

            // Add cells to the new row
            const nameCell = newRow.insertCell(0);
            const authorCell = newRow.insertCell(1);
            const topicCell = newRow.insertCell(2);
            const actionCell = newRow.insertCell(3);

            nameCell.innerHTML = book.name;
            authorCell.innerHTML = book.author;
            topicCell.innerHTML = book.topic;
            actionCell.innerHTML = '<td>Delete</td>';
            actionCell.className = 'delete-link';
            actionCell.style.color = 'rgb(190, 60, 60)';
            actionCell.style.textDecoration = 'underline';
            actionCell.style.cursor = 'pointer';
            
            setupDeleteButtons();
        }
    }
}

// call function to run first
window.addEventListener('load', loadItemsFromLocalStorage);
