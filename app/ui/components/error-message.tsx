interface ErrorDisplayProps {
  fieldName: string | any;
  errors?: Record<string, string[]>;
}

export function ErrorDisplay({ fieldName, errors }: ErrorDisplayProps) {
  const fieldErrors = errors?.[fieldName] || [];

  return (
    <div id={`${fieldName}-error`} aria-live="polite" aria-atomic="true">
      {fieldErrors.map((error, index) => (
        <p
          className="mt-2 mb-2 text-lx bg-hub-secondary-yellow text-hub-primary-red p-2 rounded-md "
          key={`${fieldName}-error-${index}`}
        >
          {error}
        </p>
      ))}
    </div>
  );
}

interface ErrorProps {
  children: React.ReactNode;
  id_error: string;
  aria_live_error: 'polite' | 'assertive';
  aria_atomic_error: 'true' | 'false';
}

export function ErrorInput({
  id_error,
  aria_live_error,
  aria_atomic_error,
}: ErrorProps) {
  return (
    <div
      id={id_error}
      aria-live={aria_live_error}
      aria-atomic={aria_atomic_error}
    ></div>
  );
}
