import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';

import { SignInContainer, ButtonsContainer } from './signin-form.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFiels, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFiels;

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const onChangeFieldHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFiels, [name]: value });
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

      setFormFields(defaultFormFields);
    } catch (error) {
      console.log('User sign in failed', error);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={submitHandler}>
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

        <ButtonsContainer>
          <Button type='submit'>Sign In </Button>
          <Button
            type='button'
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
