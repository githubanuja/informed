// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useFormState } from '../hooks/useFormState';

export const FormStateAccess = ({ children }) => {
  const formState = useFormState();
  return children(formState);
};
