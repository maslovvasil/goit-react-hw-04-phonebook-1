import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import styles from './ContactForm.module.css';

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      number: Yup.number()
      .positive('Must be >0')
      .min(8, 'Must be at least 8 symbols')
      .required('Required'),
   
  });

const ContactForm = ({ onSubmit }) => {

    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const handleNameInput = e => {
            setContactName(e.currentTarget.value);
      };
      const handleNumberInput = e => {
            setContactNumber(e.currentTarget.value);
      };

      const handleSubmit = (e) => {
    e.preventDefault();

        onSubmit({
            id: nanoid(5),
            name: contactName,
            number: contactNumber,
        });
            setContactName('');
            setContactNumber('');
    }

    return ( 
        <>
  
            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}
                validationSchema={schema}
            
                onSubmit = {(values, {resetForm} )=> {
                    console.log(JSON.stringify(values, null, 2))
                    resetForm()
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
        </>
        );
}
 
export default ContactForm;