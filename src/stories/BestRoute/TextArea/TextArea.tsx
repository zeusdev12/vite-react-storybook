import React from 'react';
import './TextArea.scss';
import { ChangeEvent } from 'react';

interface TextAreaProps {
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the component is in error state.
   */
  error?: boolean;
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
export const TextArea = ({
  disabled = false,
  error = false,
  ...props
}: TextAreaProps) => {
  return (
    <textarea readOnly={true} {...props} />
  );
};
