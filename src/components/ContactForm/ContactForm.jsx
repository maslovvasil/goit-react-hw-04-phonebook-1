import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [numberErrorMessage, setNumberErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
        const words = value.split(' ');
      const formattedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });
      const formattedValue = formattedWords.join(' ');
      setName(formattedValue);
      setNameErrorMessage('');
    } else if (name === 'number') {
      setNumber(value);
      setNumberErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid();

    // Перевірка ім'я за допомогою паттерну
    if (!/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(name)) {
      setNameErrorMessage('Name may contain only letters, apostrophe, dash and spaces.');
      return;
    }

    // Перевірка номера за допомогою паттерну
    if (!/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(number)) {
      setNumberErrorMessage('Phone number must be digits and can contain spaces, dashes, parentheses and can start with +');
      return;
    }

    // // Якщо валідація успішна, ви можете відправити дані або виконати інші дії
    // alert('Form submitted successfully!');
    onSubmit({ id, name, number });
    reset();
  };
    
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label className={styles.form__label}>{'Name'}</label>
          <input
          className={styles.form__input}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
          <p className="error-message">{nameErrorMessage}</p>
        </div>

        <div>
          <label className={styles.form__label}>Number:</label>
          <input
          className={styles.form__input}
            type="tel"
            id="number"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />
          <p className="error-message">{numberErrorMessage}</p>
        </div>

        <button className={styles.submit__btn} type="submit">
        Add contact
     </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;