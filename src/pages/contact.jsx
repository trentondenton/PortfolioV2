import React from 'react';

function Contact() {

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="form-container">
          <form action="https://formsubmit.co/trentondenton91@gmail.com" method="POST">
            <label>Name</label>
            <input type="name" onChange={() => { }} required />

            <label>Email</label>
            <input type="email" name="email" onChange={() => { }} required />

            <label>Message</label>
            <textarea rows={6} type="message" name="message" onChange={() => { }} required />
            <button type="submit" onSubmit={() => { }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact