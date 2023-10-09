import React, { useState } from 'react';
import BookItem from '../book_item';
import './styles.scss'

function BookList(props) {


  const [BookList, SetBookList] = useState([
    {
      Id: 1,
      Name: "Refactoring",
      Author: "Martin Fowler",
      Topic: "Programming",
    },
    {
      Id: 2,
      Name: "Designing Data-Intensive Applications",
      Author: "Martin Kleppmann",
      Topic: "Database",
    },
    {
      Id: 3,
      Name: "The Phoenix Project",
      Author: "Gene Kim",
      Topic: "DevOps",
    }
  ]
  );

  const DeleteBookFunc = (id) => {
    const updatedBooks = BookList.filter((book) => book.Id !== id)
    SetBookList(updatedBooks)
  }


  return (
    <div className='list-book'>
      <table id="book-table">
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Topic</th>
          <th>Action</th>
        </tr>
        {BookList.map(book => (
          <BookItem key={book.Id} Name={book.Name} Author={book.Author} Topic={book.Topic} Id={book.Id}/>
        ))}
      </table>
    </div>
  );
}

export default BookList;