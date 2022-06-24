import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';
import { isValidEmail } from '../utils/utils';

interface FormValues {
   firstName: string;
   lastName: string;
   email: string;
}

export const FormikBasicPage = () => {

   const validate = ({ firstName, lastName, email }: FormValues) => {

      const errors: FormikErrors<FormValues> = {};

      if (!firstName) {
         errors.firstName = 'required';
      } else if (firstName.length > 15) {
         errors.firstName = 'Must be 15 characters or less';
      }

      if (!lastName) {
         errors.lastName = 'required';
      } else if (lastName.length > 15) {
         errors.lastName = 'Must be 15 characters or less';
      }

      if (!email) {
         errors.email = 'required';
      } else if (!isValidEmail(email)) {
         errors.email = 'Wrong email format';
      }

      return errors;
   }

   const { handleChange, handleSubmit, values, errors, touched, handleBlur, handleReset } = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
      },
      onSubmit: (values) => {
         console.log(values);
      },
      validate
   });

   const { firstName, lastName, email } = values;

   return (
      <div>
         <h1>Formik Basic Tutorial</h1>
         <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
               type="text"
               name='firstName'
               value={firstName}
               onChange={handleChange}
               onBlur={handleBlur}
            />
            {
               touched.firstName && errors.firstName && <span>{errors.firstName}</span>
            }


            <label htmlFor="lastName">Last Name</label>
            <input
               type="text"
               name='lastName'
               value={lastName}
               onChange={handleChange}
               onBlur={handleBlur}
            />
            {
               touched.lastName && errors.lastName && <span>{errors.lastName}</span>
            }

            <label htmlFor="email">Email Address</label>
            <input
               type="email"
               name='email'
               value={email}
               onChange={handleChange}
               onBlur={handleBlur}
            />
            {
               touched.email && errors.email && <span>{errors.email}</span>
            }

            <button type="submit" >Save</button>
         </form>
      </div>
   )
}
