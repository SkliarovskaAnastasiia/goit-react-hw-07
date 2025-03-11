import { useState } from 'react';
import './App.css';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';
import Options from './components/options/Options';

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [openSearchBox, setOpenSearchBox] = useState(false);

  const onOpenForm = () => {
    setOpenForm(!openForm);
    if (openSearchBox) setOpenSearchBox(!openSearchBox);
  };
  const onOpenSearchBox = () => {
    setOpenSearchBox(!openSearchBox);
    if (openForm) setOpenForm(!openForm);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Options onForm={onOpenForm} onSearchBoxbox={onOpenSearchBox} />
      {openForm && <ContactForm />}
      {openSearchBox && <SearchBox />}
      <ContactList />
    </>
  );
}

export default App;
