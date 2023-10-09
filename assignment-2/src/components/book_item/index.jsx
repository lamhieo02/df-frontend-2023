import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

BookItem.propTypes = {
    Id: PropTypes.number.isRequired,
    Name: PropTypes.string.isRequired,
    Author: PropTypes.string.isRequired,
    Topic: PropTypes.string.isRequired,
};


function BookItem(props) {
    const { Id, Name, Author, Topic} = props;

    const NotifyDeleteCard = (name) => {
        var listBook = document.querySelector(".list-book")
        listBook.style['pointer-events'] = "none";
        var deleteCard = document.querySelector('.alert_delete');
        deleteCard.style.display = 'block';
        var nameBook = document.querySelector('.nameBook');
        nameBook.innerHTML = name
    }
    return (
        <>
            <tr>
                <td>{Name}</td>
                <td>{Author}</td>
                <td>{Topic}</td>
                <td className="delete-link" onClick={() => NotifyDeleteCard(Name)}>Delete</td>
            </tr>
        </>
    );
}


export default BookItem;