import { useSelector } from 'react-redux';
import Contact from '../contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(item => (
        <li className={css.contactItem} key={item.id}>
          <Contact contact={item} />
        </li>
      ))}
    </ul>
  );
}
