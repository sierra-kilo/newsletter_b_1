import axios from 'axios'
import React, { Component } from 'react';
import Button from './Button'

const buttonStyleDelete = {
  backgroundColor:'red'
}


const handleClick = (e, email, callback) => {
  e.preventDefault()
  axios.delete("/api/emails/delete/", {
    data: {email: email}
  }).then(() => callback())
  }


const EmailItem = ({email, onDelete}) => (

<li className="collection-item">
  <div>
    {email}

      <a className='secondary-content'>
        <i
          className='material-icons use-pointer'
          onClick={e => handleClick(e, email, onDelete)}
          >delete</i>


        {/* <Button
          className='-small'
          buttonLabel={'Delete'}
          buttonStyle={buttonStyleDelete}
          onClick={e => handleClick(e, email, onDelete)}/> */}
      </a>


  </div>
</li>
)
export default (EmailItem)
