import React from 'react'
import './ContactCard.css';
import user from '../Images/avtar.jpeg';

const ContactCard=(props) => {

  const {id,name,number}=props.contacts;
  return (
    
      <div className='item maindiv'>
        <img className='ui avtar image' src={user} alt='user'/>
      <div className='content'>
        <div className='header'>{name}</div>
        <div>{number}</div>
      </div>
      <i className='trash alternate outline icon'  
      style={{marginRight:"200px"}}></i>
     
    </div>
    
  )
}

export default ContactCard