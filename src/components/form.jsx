import React, { useState } from 'react';

function Form() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      alert("All fields are required!");
      return;
    }``

    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Message:', message);

    setFullName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="form">
      <h1>Send Me a Message</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="@Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>Send Message</button>
      </div>
    </div>
  );
}

export default Form;