import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from "./Header";
import AddContact from "./AppContact";
import EditContact from "./EditContact";
import ContactList from "./ContactList";
import ContactDetail from './ContactDetail';
import api from "../api/contacts";
import Test from "./Test";

function App() {
  //const [contacts, setContacts]=useState([]);
  const LOCAL_STORAGE_KEY= "contacts";

  const [contacts, setContacts]=useState([]);
  

  const addContactHandler = (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = api.post("/contacts",request);
    setContacts([...contacts,response.data]);
  };

  const deleteContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactsList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactsList);
  };

  const updateContactHandler = (contact) => {
  };

  const retieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;

  };

   useEffect( () => {
    const getAllContacts = async() => {
      const allContacts = await retieveContacts();
      if(allContacts)
      setContacts(allContacts);
    };
    getAllContacts();
  },[]);

  /*useEffect( () => {
    const retieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retieveContacts) setContacts(retieveContacts);
  },[]);*/


  useEffect( () => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className='ui container'>
      <Router>
      <Header/>
      <Routes>
      <Route path="/" exact Component={ () => <ContactList contacts={contacts} getContactId={deleteContactHandler}/>}/>
      <Route path="/add" Component={ () => <AddContact addContactHandler={addContactHandler}/>}/>
      <Route path="/edit" Component={ () => <EditContact updateContactHandler={updateContactHandler}/>}/>
      <Route path="/contact/:id" Component={ContactDetail}></Route>
      <Route path="/test" Component={ () => <Test/>}/>
      </Routes>
      </Router>
      
    
    </div>
  );
}

export default App;
