import { useField } from "formik";

interface Props {
   label: string;
   name: string;
   options?: any[][];
   [x: string]: any;
}


export const MySelectInput = ({ label, options, ...props }: Props) => {

   const [field, meta] = useField(props);

   return (
      <>
         <label htmlFor={props.id || props.name}>{label}</label>
         {
            options
               ? (<select {...field} {...props}>
                  <option value="">Selecciona una opcion</option>
                  {
                     options.map(option => (
                        <option value={option[0]} key={option[0]}>{option[1]}</option>
                     ))
                  }
               </select>)
               : (
                  <select {...field} {...props} />
               )
         }
         {
            meta.touched && meta.error && (
               <span className="error">{meta.error}</span>
            )
         }
      </>
   )
}