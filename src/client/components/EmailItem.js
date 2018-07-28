import React from 'react';
import axios from 'axios'

const EmailItem = ({email, onDelete}) => (

  <div>
    <h3>{email}</h3>
    <button
      onClick={(e) => {
      e.preventDefault()
      axios.delete("/api/emails/delete/", {
        data: {email: email}
      })
        onDelete()
      }
    }
    >
      Remove
  </button>
  </div>
)
export default (EmailItem)
