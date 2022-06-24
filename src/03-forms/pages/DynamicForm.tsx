import formJson from "../data/custom-form.json";
import { Formik, Form } from "formik";
import { MySelectInput, MyTextInput } from "../components";
import * as Yup from 'yup';
import { isValidEmail } from '../utils/utils';

export const DynamicForm = () => {
   const initialValues: { [key: string]: any } = {}
   const requiredFields: { [key: string]: any } = {};

   // OPCION 1 //
   // let initialValues: { [key: string]: any } = {};
   // formJson.map(({ name, value }) => {
   //    initialValues = {
   //       ...initialValues,
   //       [name]: value
   //    }
   // });

   // OPCION 2 //
   for (const input of formJson) {
      initialValues[input.name] = input.value;

      if (!input.validations) continue;

      let schema = Yup.string()

      for (const rule of input.validations) {
         if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
         }

         // Otras reglas
         if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `Minimo ${(rule as any).value || 2} caracteres`);
         }

         if (rule.type === 'email') {
            schema = schema.email(`Correo no válido`);
         }
      }

      requiredFields[input.name] = schema;

   }

   const validationSchema = Yup.object({ ...requiredFields });



   return (
      <div>
         <h1>DynamicForm</h1>
         <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
               console.log(values);
            }}
            validationSchema={validationSchema}
         >
            {
               (formik) => (
                  <Form noValidate>
                     {formJson.map(({ name, options, placeholder, type, label }) => {

                        if (type === "text" || type === "email" || type === "password") {
                           return <MyTextInput
                              key={name}
                              label={label}
                              type={type as any}
                              name={name}
                              placeholder={placeholder}
                           />
                        } else if (type === "select") {
                           return <MySelectInput
                              label={label}
                              name={name}
                              key={name}
                           >
                              <option value="" > Selecciona una opcion</option>
                              {
                                 options?.map(({ id, label }) => (
                                    <option value={id} key={id} > {label}</option>
                                 ))
                              }
                           </MySelectInput>
                        }

                     })}
                     <button type="submit">Create</button>
                  </Form>
               )
            }
         </Formik>
      </div>
   )
}