import { Field, Form, Formik, ErrorMessage } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';

export const FormikComponentsPage = () => {

   return (
      <div>
         <h1>Formik Components</h1>

         <Formik
            initialValues={{
               firstName: '',
               lastName: '',
               email: '',
               terms: false,
               jobType: ''
            }}
            onSubmit={(values) => {
               console.log(values);
            }}
            validationSchema={
               Yup.object({
                  firstName: Yup.string()
                     .max(20, 'Debe tener menos de 20 caracteres')
                     .required('Requerido'),
                  lastName: Yup.string()
                     .max(15, 'Debe tener menos de 15 caracteres')
                     .required('Requerido'),
                  email: Yup.string()
                     .required('Requerido')
                     .email('Correo invalido'),
                  terms: Yup.boolean()
                     .isTrue('Debes aceptar los terminos y condiciones'),
                  jobType: Yup.string()
                     .required('Necesitas seleccionar una opcion')
                     .notOneOf(['it-junior'], 'No puedes seleccionar esta opcion')
               })
            }
         >
            {
               formik => (
                  <Form noValidate>
                     <label htmlFor="firstName">First Name</label>
                     <Field name="firstName" type="text" />
                     <ErrorMessage name={'firstName'} component="span" />

                     <label htmlFor="lastName">Last Name</label>
                     <Field name="lastName" type="text" />
                     <ErrorMessage name={'lastName'} component="span" />

                     <label htmlFor="email">Email Address</label>
                     <Field name="email" type="email" />
                     <ErrorMessage name={'email'} component="span" />

                     <label htmlFor="jobType">JobType</label>
                     <Field name="jobType" as="select" >
                        <option value="">Pick something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-senior">IT Senior</option>
                        <option value="it-junior">IT Junior</option>
                     </Field>

                     <ErrorMessage name={'jobType'} component="span" />

                     <label>
                        <Field name="terms" type="checkbox" />
                        Terms and conditions
                     </label>
                     <ErrorMessage name={'terms'} component="span" />

                     <button type="submit" >Save</button>
                  </Form>
               )
            }
         </Formik>
      </div>
   )
}
