import { ErrorMessage, Field, Form, Formik } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';

export const RegisterFormikPage = () => {

   return (
      <Formik
         initialValues={{
            name: '',
            email: '',
            password: '',
            repeatPassword: ''
         }}
         onSubmit={(values) => {
            console.log(values);
         }}
         validationSchema={
            Yup.object({
               name: Yup.string().
                  required('Requerido')
                  .min(2, 'Debe contener al menos 2 caracteres')
                  .max(40, 'Debe contenter maximo 20 caracteres'),
               email: Yup.string().
                  required('Requerido')
                  .email('Correo no es valido'),
               password: Yup.string().
                  required('Requerido')
                  .min(6, 'Contraseña debe contener al menos 6 caracteres'),
               repeatPassword: Yup.string()
                  .required('Requerido')
                  .oneOf([Yup.ref('password'), null], 'Contraseñas no coinciden')
            })
         }
      >
         {
            ({ handleReset }) => (
               <Form noValidate>
                  <h1>Register Formik Page</h1>
                  <Field name="name" type="text" placeholder='Name' />
                  <ErrorMessage name={'name'} component="span" />

                  <Field name="email" type="email" placeholder='Email' />
                  <ErrorMessage name={'email'} component="span" />

                  <Field name="password" type="password" placeholder='Password' />
                  <ErrorMessage name={'password'} component="span" />

                  <Field name="repeatPassword" type="password" placeholder='Repeat password' />
                  <ErrorMessage name={'repeatPassword'} component="span" />

                  <button type='submit'>Create</button>
                  <button onClick={handleReset}>Reset</button>
               </Form>
            )
         }
      </Formik>
   )
}
