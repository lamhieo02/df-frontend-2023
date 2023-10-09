import React from 'react';
import PropTypes from 'prop-types';
import BookList from '../book_list';
import './styles.scss'

function Body(props) {
    return (
        <div className="search-and-add-container">
            <input type="text" id="search-input" placeholder="Search books" />
            <button id="add-button">Add book</button>
            <BookList />
        </div>
    );
}

export default Body;