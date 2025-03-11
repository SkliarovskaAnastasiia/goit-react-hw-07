import { useEffect, useState } from 'react';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';
import Options from './components/options/Options';
import { fetchContacts } from './redux/contactsOps';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from './redux/contactsSlice';
import './App.css';

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      {loading && !error && <b>Loading...</b>}
      {error && <b>Something went wrong, plz reload page</b>}
      <ContactList />
    </>
  );
}

export default App;
