import React, { useState } from 'react';
import './styles.scss'
import PropTypes from 'prop-types';

function DeleteCard(props) {

    return (
        <div className='alert_delete'>
            <strong>Delete book</strong>
            <i class="fa-solid fa-xmark close-button"></i>
            <p>Do you want to delete</p>
            <p><b className='nameBook'>{"none"}</b> book?</p>

            <div className="alert_button">
                <p className='delete'>Delete</p>
                <p className='cancel' onClick={() => {
                    var alertDelete = document.querySelector('.alert_delete');
                    alertDelete.style.display = 'none';
                    var listBook = document.querySelector(".list-book")
                    listBook.style['pointer-events'] = "all";            
                }}>Cancel</p>
            </div>
        </div>
    );
}

export default DeleteCard;
