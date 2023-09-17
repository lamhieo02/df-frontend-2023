
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById('add-button');
    const addBookForm = document.querySelector('.add-book');
    const createButton = document.querySelector('.create-button');
    const bookTable = document.getElementById('book-table');
    const exitCreteBook = document.getElementById('exit-create-book');


    addBookForm.style.display = 'none';

    // process when click "Add book" button
    addButton.addEventListener('click', () => {
        addBookForm.style.display = 'block'; // appear the form
    });

    exitCreteBook.addEventListener('click', () => {
        addBookForm.style.display = 'none'; // disappear the form
    })
    setupDeleteButtons();
    handleSearchBox();

    // process when click "Create" button
    createButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const author = document.getElementById('author').value;
        const topic = document.getElementById('dropdown').value;

        const newItem =
        {
            name: name,
            author: author,
            topic: topic
        }

        // Create a new row
        const newRow = bookTable.insertBefore(document.createElement('tr'), bookTable.childNodes[0])
        bookTable.insertAdjacentElement('beforeend', newRow);

        // Add cells to the new row
        const nameCell = newRow.insertCell(0);
        const authorCell = newRow.insertCell(1);
        const topicCell = newRow.insertCell(2);
        const actionCell = newRow.insertCell(3);

        nameCell.innerHTML = name;
        authorCell.innerHTML = author;
        topicCell.innerHTML = topic;
        actionCell.innerHTML = '<td>Delete</td>';
        actionCell.className = 'delete-link';
        actionCell.style.color = 'rgb(190, 60, 60)';
        actionCell.style.textDecoration = 'underline';
        actionCell.style.cursor = 'pointer';

        addItemToLocalStorage(newItem)

        // Initialize the input fields
        document.getElementById('name').value = '';
        document.getElementById('author').value = '';

        setupDeleteButtons();
        // Disappear the form
        addBookForm.style.display = 'none';
    });
});

function setupDeleteButtons() {
    var deleteLinks = document.querySelectorAll(".delete-link");
    var alertBox = document.querySelector(".alert");
    var closeButton = document.querySelector(".close-button");
    var cancelButton = document.querySelector(".cancel-button");
    var deleteButton = document.querySelector(".delete-button");
    var rowToDelete = null;
    // iterate through each element and add click event
    deleteLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            alertBox.style.display = "block";
            rowToDelete = link.parentNode;

            deleteButton.removeEventListener("click", onDeleteButtonClick);

            // add click event to close button
            closeButton.addEventListener("click", function () {
                alertBox.style.display = "none";
                deleteButton.removeEventListener("click", onDeleteButtonClick);
            });

            // add click event to cancel button
            cancelButton.addEventListener("click", function () {
                alertBox.style.display = "none";
                deleteButton.removeEventListener("click", onDeleteButtonClick);
            });

            deleteButton.addEventListener("click", onDeleteButtonClick);
        });
    });
    function onDeleteButtonClick() {
        if (rowToDelete) {
            // remove the row from the table
            rowToDelete.parentNode.removeChild(rowToDelete);
        }

        const currentTable = document.getElementById('book-table');
        const tableData = [];

        // iteracte <tr>
        const rows = currentTable.querySelectorAll('tr');
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const cells = row.querySelectorAll('td');

            const book = {
                name: cells[0].textContent,
                author: cells[1].textContent,
                topic: cells[2].textContent
            };

            tableData.push(book);
        }

        saveItemsToLocalStorage(tableData)

        alertBox.style.display = "none";
    }
}

function handleSearchBox() {
    // listen to the input event on the search box
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function () {
        const searchText = this.value.toLowerCase();
        const rows = document.querySelectorAll('#book-table tr');
        // interate through each row
        for (let i = 1; i < rows.length; i++) { // start at 1 because the first row is the header
            const row = rows[i];
            const columns = row.getElementsByTagName('td');
            let rowShouldBeVisible = false;

            // interate through each column
            for (let i = 0; i < columns.length; i++) {
                const cellText = columns[i].textContent.toLowerCase();
                if (cellText.includes(searchText)) {
                    // if the text in the column contains the search text, then the row should be visible
                    rowShouldBeVisible = true;
                    break;
                }
            }

            // show or hide the row
            if (rowShouldBeVisible) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        }
    });

}