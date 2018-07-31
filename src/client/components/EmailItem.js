import axios from 'axios'
import React, { Component } from 'react';
import Button from './Button'



const EmailItem = ({email, onDelete}) => (

  <div>
    <h3>{email}</h3>
    <button
      // buttonLabel={'Delete'}
      onClick={(e) => {
        e.preventDefault()
        axios.delete("/api/emails/delete/", {
          data: {email: email}
        }).then(() => onDelete())
      }
    }
    >
      remove
  </button>
  </div>
)
export default (EmailItem)






// class EmailItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showEmail: true
//     };
//     this.hideEmail = this.hideEmail.bind(this)
//   }
//
//   hideEmail = () => this.setState({showEmail:false})
//
//   render() {
//     return (
//       <div>
//         <h3>{this.props.email}</h3>
//         <button
//           onClick={(e) => {
//           e.preventDefault()
//           axios.delete("/api/emails/delete/", {
//             data: {email: this.props.email}
//           })
//           this.hideEmail()
//           }
//         }
//         >
//           Remove
//       </button>
//       </div>
//     );
//   }
//
// }
//
// export default EmailItem;
