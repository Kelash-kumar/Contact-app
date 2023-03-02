import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {

  const contactListRender=props.contacts.map((contact) =>{
    return (   
      <ContactCard contacts={contact}/>
     
);
  })
  
  return (
    <div className='ui celled list'>  {contactListRender}  </div >
  )
}

export default ContactList