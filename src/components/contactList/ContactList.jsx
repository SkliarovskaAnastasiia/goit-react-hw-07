import css from './ContactList.module.css';
import Contact from '../contact/Contact';
import { useSelector } from 'react-redux';

const getVisiableContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().startsWith(filter.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.name);

  const filteredContacts = getVisiableContacts(contacts, filter);

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
