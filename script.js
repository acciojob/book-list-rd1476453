// Get the table body where new rows will be inserted
const bookList = document.getElementById('book-list');
// Get the form element
const bookForm = document.getElementById('book-form');


// Event Listener for adding a book
bookForm.addEventListener('submit', addBook);

// Event Listener for deleting a book (uses event delegation on the table body)
bookList.addEventListener('click', deleteBook);


/**
 * Handles the form submission: collects data, creates a new row, and clears fields.
 * @param {Event} e - The submit event object.
 */
function addBook(e) {
    e.preventDefault(); // Prevents the default form submission (page refresh)

    // Get values from input fields
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const isbn = document.getElementById('isbn').value.trim();

    // Basic validation (ensure all fields are filled)
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields.');
        return;
    }

    // 1. Create a new table row element
    const row = document.createElement('tr');

    // 2. Insert the book data into the row
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;

    // 3. Append the new row to the table body
    bookList.appendChild(row);

    // 4. Clear the input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}


/**
 * Handles the click event for deleting a book row.
 * Uses event delegation by checking if the clicked target has the 'delete' class.
 * @param {Event} e - The click event object.
 */
function deleteBook(e) {
    // Check if the clicked element is the delete button
    if (e.target.classList.contains('delete')) {
        // Remove the parent <tr> element (the entire book row)
        // e.target is the button -> parentElement is the <td> -> parentElement is the <tr>
        e.target.parentElement.parentElement.remove();
    }
}