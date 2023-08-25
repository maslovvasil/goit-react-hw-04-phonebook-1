import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import styles from './ContactForm.module.css';

// const SignupSchema = Yup.object().shape({
//     firstName: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//     lastName: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//   });

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      number: Yup.number()
      .positive('Must be >0')
      .min(10, 'Too Long!')
      .required('Required'),
   
  });

const ContactForm = ({ addContact }) => {

    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const handleNameInput = e => {
        setContactName(e.currentTarget.value);
      };
      const handleNumberInput = e => {
        setContactNumber(e.currentTarget.value);
      };

    //   const reset = () => {
    //     setContactName('');
    //     setContactNumber('');
    //   };

    
    

    return ( 
        <>
  
            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}
                validationSchema={schema}
                onSubmit={async (values, actions) => {
                  console.log(values);
                  addContact(values);
                  actions.resetForm();
                }}
                >
                <Form className={styles.form} >
                    <label className={styles.lbl}>
                        Name
                        <Field id="firstName" name="name" placeholder="" />
                    </label>
                    

                    <label className={styles.lbl}>
                        Number
                        <Field id="lastName" name="number" placeholder="" />
                        </label>
                    

                    <button className={styles.btn} type="submit">Submit</button>
                </Form>
            </Formik>
        </>
        );
}
 
export default ContactForm;