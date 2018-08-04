import axios from 'axios'
import React, { Component } from 'react';
import Button from './Button'

const buttonStyleDelete = {
  backgroundColor:'red'
}
const lineStyle = {
  display: 'inline'
}

const handleClick = (e, email, callback) => {
  e.preventDefault()
  axios.delete("/api/emails/delete/", {
    data: {email: email}
  }).then(() => callback())
  }


const EmailItem = ({email, onDelete}) => (

  <div>
            <div>
              <span style={lineStyle}>
              <h5>
                {email}
              </h5>
            </span>
              <span style={lineStyle}>
                <Button
                  display
                className="secondary-content"
                buttonLabel={'Delete'}
                buttonStyle={buttonStyleDelete}
                onClick={e => handleClick(e, email, onDelete)}
                >
              </Button></span>
            </div>
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
