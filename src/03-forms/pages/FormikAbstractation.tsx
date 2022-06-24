import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput, MySelectInput, MyCheckBoxInput } from '../components';

import '../styles/styles.css';

export const FormikAbstractation = () => {

   return (
      <div>
         <h1>Formik Abstractation</h1>

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
               () => (
                  <Form noValidate>

                     <MyTextInput label='First Name' name='firstName' placeholder='First Name' />
                     <MyTextInput label='Last Name' name='lastName' placeholder='Last Name' />
                     <MyTextInput label='Email' name='email' type='email' placeholder='Email' />

                     <MySelectInput
                        label={'jobType'}
                        name={'jobType'}
                        options={[
                           ['developer', 'Developer'],
                           ['designer', 'Designer'],
                           ['it-senior', 'IT Senior'],
                           ['it-junior', 'IT Junior']
                        ]}
                     />
                     {/* <MySelectInput
                        label={'jobType'}
                        name={'jobType'}
                     >
                        <option value="">Pick something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-senior">IT Senior</option>
                        <option value="it-junior">IT Junior</option>
                     </MySelectInput> */}
                     <MyCheckBoxInput label={'Terms and conditions'} name={'terms'} />

                     <button type="submit" >Save</button>
                  </Form>
               )
            }
         </Formik>
      </div>
   )
}
