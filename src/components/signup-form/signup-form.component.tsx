import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { signUpStart } from '../../store/user/user.action';

import { SignUpContainer } from './signup-form.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFiels, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFiels;

  const onChangeFieldHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFiels, [name]: value });
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));

      setFormFields(defaultFormFields);
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Email already exists.');
      } else {
        console.log(error);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label='Display Name'
          type='text'
          onChange={onChangeFieldHandler}
          name='displayName'
          value={displayName}
          required
        />

        <FormInput
          label='Email'
          type='email'
          onChange={onChangeFieldHandler}
          name='email'
          value={email}
          required
        />

        <FormInput
          label='Password'
          type='password'
          onChange={onChangeFieldHandler}
          name='password'
          value={password}
          required
        />

        <FormInput
          label='Confirm Password'
          type='password'
          onChange={onChangeFieldHandler}
          id='confirmPassword'
          name='confirmPassword'
          value={confirmPassword}
          required
        />

        <Button type='submit'>Sign Up </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
