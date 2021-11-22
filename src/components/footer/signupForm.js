import React, { useState } from 'react';
import { apiProvider } from '../../api/api'
import { useForm } from 'react-hook-form';
import './footer.scss'

export const SignupForm = () => {
  const [success, setSuccess] = useState('')
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log({ data })
    apiProvider.postData(data).then(res => {
      setSuccess('Successful Sign up, Thank you.')
    }).catch(err => {
      console.log('err')
    })
  }


  return (
    <>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="inputClass"
          type="text"
          name="email"
          {...register('email', {
            required: 'Email is Required',
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter valid Email',
            },
          })}
          placeholder="Email"
        />
        <button className="btn" type="submit">
          SUBMIT
        </button>
        {errors.email?.message && <span>{errors.email.message}</span>}
      </form>

        <div className="success-msg"> {success} </div>
    </>
  );
};
