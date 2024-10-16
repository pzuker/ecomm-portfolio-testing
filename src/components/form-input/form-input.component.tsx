import { InputHTMLAttributes, FC } from 'react';

import { FormInputLabel, Input, Group } from './form-input.styles';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const formInput: FC<FormInputProps> = ({ label, ...inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            inputOptions.value &&
              typeof inputOptions.value === 'string' &&
              inputOptions.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default formInput;
