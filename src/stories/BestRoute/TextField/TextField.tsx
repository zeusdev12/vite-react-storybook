import React from 'react';
import './TextField.scss';
import { ChangeEvent } from 'react';

interface TextFieldProps {
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the component is in error state.
   */
  error?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder?: string;
  /**
   * The content value of the `input`
   */
  value?: string;
  /**
   * Callback fired when the value is changed.
   */
  onChange?: (event: ChangeEvent) => void;
}

/**
 * Primary UI component for user interaction
 */
export const TextField = ({
  disabled = false,
  error = false,
  size = 'medium',
  ...props
}: TextFieldProps) => {
  const mode = error ? 'textfield--error' : disabled ? 'textfield--disabled' : '';
  return (
    <input
      className={['textfield', `textfield--${size}`, mode].join(' ')}
      disabled={disabled}
      {...props}
    />
  );
};
