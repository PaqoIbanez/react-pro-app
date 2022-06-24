import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css'

export const RegisterPage = () => {

   const { formData, onChange } = useForm({
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
   });
   const { name, email, password, repeatPassword } = formData;

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(formData);

   }

   return (
      <div>
         <h1>Register Page</h1>
         <form onSubmit={handleSubmit} noValidate>
            <input
               type="text"
               placeholder="Name"
               value={name}
               onChange={(e) => onChange(e)}
               name='name'
            />
            <input
               type="text"
               placeholder="Email"
               value={email}
               onChange={(e) => onChange(e)}
               name='email'
            />
            <input
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => onChange(e)}
               name='password'
            />
            <input
               type="password"
               placeholder="Repeat password"
               value={repeatPassword}
               onChange={(e) => onChange(e)}
               name='repeatPassword'
            />
            <button type='submit'>Create</button>
         </form>
      </div >
   )
}
