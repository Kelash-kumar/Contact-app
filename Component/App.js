import {React,useState,useEffect} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
// import { uuid } from 'uuidv4';
// import ContactCard from './ContactCard';
import './App.css';
const LOCAL_STORAGE_KEY="contacts";
const App=()=>{
    //use state hook in react use for change state
const[contacts,setContacts]=useState([]);
const AddContactHandler =(contact)=>{
// setContacts([...contacts,{id:uuid,...contact}]);
setContacts([...contacts,contact]);
}; 

//now to use filter method to remove the data:
const removecontact=(id)=>{   
const newcontactList=contacts.filter=(contact)=>{
return contact.id!==id;
}

}
//use to get the local storage for contact information
 useEffect(() => {
 const getcontact= JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY));
if(getcontact)setContacts(getcontact);
},[]);
//use to set the local storage for contact information
 useEffect(() => {
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
},[contacts]);

    return(
    <div>
        <Header/>
        <AddContact AddContactHandler={AddContactHandler}/>
        <ContactList contacts={contacts} removecontact={removecontact}/>
    </div>
    )
}

export default App;