import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <p className={styles.contact__info}>
        {name}: {number}
      </p>
      <button className={styles.contact__delete__btn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired
};

export default Contact;
