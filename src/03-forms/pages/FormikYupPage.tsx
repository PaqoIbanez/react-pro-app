import { useFormik } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';

export const FormikYupPage = () => {

   const { handleSubmit, errors, touched, getFieldProps } = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
      },
      onSubmit: (values) => {
         console.log(values);
      },
      validationSchema: Yup.object({
         firstName: Yup.string()
            .max(15, 'Debe tener menos de 15 caracteres')
            .required('Requerido'),
         lastName: Yup.string()
            .max(15, 'Debe tener menos de 15 caracteres')
            .required('Requerido'),
         email: Yup.string()
            .required('Requerido')
            .email('Correo invalido'),
      })
   });

   return (
      <div>
         <h1>Formik Yup</h1>
         <form noValidate onSubmit={handleSubmit}>

            <label htmlFor="firstName">First Name</label>
            <input type="text" {...getFieldProps('firstName')} />
            {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

            <label htmlFor="lastName">Last Name</label>
            <input type="text" {...getFieldProps('lastName')} />
            {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

            <label htmlFor="email">Email Address</label>
            <input type="email" {...getFieldProps('email')} />
            {touched.email && errors.email && <span>{errors.email}</span>}

            <button type="submit" >Save</button>

         </form>
      </div>
   )
}