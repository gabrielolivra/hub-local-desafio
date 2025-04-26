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
  describely?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  stateError?: {
    errors?: Record<string, string[] | undefined>;
    message?: string | null | undefined | unknown;
    data?: Record<string, any>;
  };
  ref?: any;
}

export default function Input({
  describely,
  type,
  label,
  id,
  name,
  classProps,
  onChange,
  required,
  value,
  defaultValue,
  stateError,
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
        aria-describedby={describely}
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
          ${stateError && stateError.errors && name && stateError.errors[name] ? 'border-red-500' : ''}
          ${className}
        `}
        disabled={disabled}
        readOnly={readOnly}
        {...rest}
      />
      {stateError && stateError.errors && name && stateError.errors[name] && (
        <div id={id} aria-live="polite" aria-atomic="true">
          {stateError.errors[name].map((error: string) => (
            <p className="mt text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
