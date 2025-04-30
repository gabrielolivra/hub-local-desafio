'use client';
import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?:
  | 'number'
  | 'text'
  | 'password'
  | 'email'
  | 'date'
  | 'datetime-local'
  | 'hidden'
  | 'checkbox';
  label?: string;
  classProps?: string;
  errors?: string[];
  disabled?: boolean;
  defaultValue?: string | number | readonly string[] | undefined;

}

export default function Input({
  type,
  label,
  id,
  name,
  classProps,
  onChange,
  required,
  value,
  defaultValue,
  disabled,
  readOnly,
  className,
  ...rest
}: InputProps) {
  return (
    <div className={`flex flex-col ${classProps}`}>
      <label htmlFor="" className="font-semibold text-hub-primary-light">
        {label}
        {required && '*'}
      </label>
      <input
        type={type || 'text'}
        id={id}
        required={required}
        name={name}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        className={`
          rounded-lg border border-hub-primary-light 
          focus:border-hub-secondary-yellow 
          read-only:bg-gray-200 read-only:cursor-not-allowed read-only:opacity-50
          disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50
          ${className}
        `}
        disabled={disabled}
        readOnly={readOnly}
        {...rest}
      />
    </div>
  );
}
