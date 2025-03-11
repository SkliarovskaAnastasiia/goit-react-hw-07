import { Field, Formik, Form } from 'formik';
import { ErrorMessage } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const formValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
});

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    const newContact = { id: nanoid(), ...values };

    dispatch(addContact(newContact));

    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={formValidation}
    >
      <Form className={css.contactForm}>
        <label className={css.nameLabel} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.formField}
          type="text"
          name="name"
          id={nameId}
        ></Field>
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />

        <label className={css.numberLabel} htmlFor={numberId}>
          Number
        </label>
        <Field
          className={css.formField}
          type="tel"
          name="number"
          id={numberId}
        ></Field>
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="span"
        />

        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
