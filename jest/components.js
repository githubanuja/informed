import React from 'react';
import { useForm, useField } from '../src';

export const Form = props => {
  const { formController, render, userProps } = useForm(props);

  return render(
    <form
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}
    />
  );
};

export const Input = React.memo(props => {
  const { render, informed, ref, fieldState, userProps } = useField({
    type: 'text',
    ...props
  });
  const { showError } = fieldState;
  const { label } = userProps;
  return render(
    <label>
      {label}
      <input
        ref={ref}
        {...informed}
        style={showError ? { border: 'solid 1px red' } : null}
      />
      {showError ? (
        <small style={{ color: 'red' }}>{fieldState.error}</small>
      ) : null}
    </label>
  );
});

export const Checkbox = ({ label, ...props }) => {
  const { render, informed } = useField({ type: 'checkbox', ...props });

  return render(
    <label>
      {label}
      <input {...informed} checked={informed.value} />
    </label>
  );
};
