import { PiUser } from 'react-icons/pi';
import { PiPhone } from 'react-icons/pi';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.contactInfoWrappper}>
        <p className={css.contactInfo}>
          <PiUser size={20} /> {name}
        </p>
        <p className={css.contactInfo}>
          <PiPhone size={20} /> {number}
        </p>
      </div>

      <button
        className={css.contactBtn}
        type="button"
        onClick={handleDeleteContact}
      >
        Delete
      </button>
    </>
  );
}
