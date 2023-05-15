import React from 'react';
import "./contact.css";
const contact = () => {
  return (
    <div className='contact'>
          <div className='contactheader'>contact
          <div className='bar'></div>
          </div>
    <div className='map'>

    </div>
    <div className='form'>
    <form>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' />

          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' />

          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message'></textarea>

          <input type='submit' value='Submit' />
        </form>
    </div>
    </div>
  )
}

export default contact