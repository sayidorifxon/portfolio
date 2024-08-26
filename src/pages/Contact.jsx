import React from 'react'
import "../styles/contact.css"
function Contact() {
  return (
    <div>
      <div className="box">
        <form>
          <div>
            <label >name:</label>
            <input type="text" placeholder='name' />
          </div>
          <div>
            <label >email:</label>
            <input type="text" placeholder='Email' />
          </div>
          <div>
            <label >Phone:</label>
            <input type="text" placeholder='Phone(optional)' />
          </div>
          <div>
            <label >message:</label>
            <textarea type="text" placeholder='message...' />
          </div>
          <button>send e-mail</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
