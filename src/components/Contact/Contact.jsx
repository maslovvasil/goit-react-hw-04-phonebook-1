import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <p className={styles.contact__info}>
        {name}: {number}
      </p>
      <button className={styles.contact__delete__btn} onClick={deleteContact}>
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
