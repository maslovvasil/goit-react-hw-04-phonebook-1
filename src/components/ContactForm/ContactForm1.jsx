import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import styles from './ContactForm.module.css';

const schema = Yup.object().shape({
  name: Yup.string().min(1, 'Too short!').required('Required'),
  number: Yup.string()
    .min(9, 'Must be at least 9 symbols')
    .required('Required'),
});

const ContactForm = ({ onSubmit }) => {
  // const [contactName, setContactName] = useState('');
  // const [contactNumber, setContactNumber] = useState('');



  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
   <Form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.lbl}>
                        Name
                        <Field value={contactName} name="name" placeholder="Name" onChange={handleNameInput}/>
                    </label>
                    <label className={styles.lbl}>
                        Number
                        <Field value={contactNumber} name="number" placeholder="Number phone" onChange={handleNumberInput}/>
                    </label>
                    <button className={styles.btn} type="submit" >Submit</button>
                </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.number,
  }),
  id: PropTypes.string,
};

export { ContactForm };