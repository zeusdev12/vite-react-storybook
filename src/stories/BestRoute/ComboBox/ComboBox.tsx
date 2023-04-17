import React, { useEffect, useRef, useState } from 'react';
import './ComboBox.scss';

interface ComboBoxProps {
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder?: string;
  /**
   * The combobox items
   */
  options?: string[];
  /**
   * The content value of the `input`
   */
  value?: string;
  /**
   * Callback fired when the item is selected.
   */
  onChange?: (item: string) => void;
}

/**
 * Primary UI component for user interaction
 */
export const ComboBox = ({
  disabled = false,
  size = 'medium',
  value = '',
  options = [],
  onChange,
  placeholder
}: ComboBoxProps) => {
  const [query, setQuery] = useState(value);
  const [listVisible, setListVisible] = useState(false);
  const comboRef = useRef<HTMLInputElement>(null);
  const mode = !options.length || disabled 
    ? 'combobox--disabled' 
    : listVisible 
    ? 'combobox--list-show'
    : '';
  
  const filteredOptions = query 
    ? options.filter(option => 
        option.toLowerCase().includes(query.toLowerCase())
      )
    : options;

  const onSelectItem = (value: string) => {
    setQuery(value);
    setListVisible(false);
  }

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (comboRef.current && !comboRef.current.contains(event.target as Element)) {
        // clicked outside region, hide component
        setListVisible(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [comboRef]);

  return (
    <div className={['combobox', `combobox--${size}`, mode].join(' ')} ref={comboRef}>
      <input
        className={'combobox-query'}
        type="text"
        onChange={e => setQuery(e.target.value)}
        disabled={!options.length || disabled }
        placeholder={placeholder}
        value={query}
        onClick={e => setListVisible(!listVisible)}
      />
      <div className='combobox-list'>
        {filteredOptions.map((option, index) => (
          <option 
            className={'combobox-list-item'}
            key={index} 
            value={index}
            onClick={e => onSelectItem(option)}
          >
            {option}
          </option>
        ))}
      </div>
    </div>
  );
};
