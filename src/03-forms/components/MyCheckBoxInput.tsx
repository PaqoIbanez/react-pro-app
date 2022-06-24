import { ErrorMessage, useField } from "formik";

interface Props {
   label: string;
   name: string;
   [x: string]: any;
}

export const MyCheckBoxInput = ({ label, ...props }: Props) => {

   const [field, meta] = useField(props);

   return (
      <>
         <label>
            <input type="checkbox" {...props} {...field} />
            {label}
         </label>
         <ErrorMessage name={props.name} component='span' className="custom-span-error-class" />
         {/* {
            meta.touched && meta.error && <span className="error">{meta.error}</span>
         } */}
      </>
   )

}