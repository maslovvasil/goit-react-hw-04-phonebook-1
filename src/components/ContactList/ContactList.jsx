import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contact__list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contact__list__item}>
          <Contact
            id={id}
            name={name}
            number={number}
            deleteContact={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;