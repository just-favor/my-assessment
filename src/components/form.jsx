import React from 'react'

function Form() {
  return (
    <div className="form">
        <h1>Send Me a Message</h1>
        <div className="form-container">
            <input type="text" placeholder='Full Name'/>
            <input type="mail" placeholder='@Email'/>
            <textarea name="" id="" placeholder='Send a message'></textarea>
            <button>Send Message</button>
        </div>
    </div>
  )
}

export default Form