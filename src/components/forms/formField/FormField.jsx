import styles from "./FormField.module.css";

export default function FormField({
  id,
  label,
  name,
  placeholder,
  type,
  value,
  autocomplete,
  onChange,
  onBlur,
  error,
  required = false,
}) {
  return (
    <div className={styles.formField}>
      <label htmlFor={id}>{label}</label>
      {name === "message" ? (
        <textarea
          className={`${styles.input} ${error ? styles.error : ""}`}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          id={id}
          autoComplete={autocomplete}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
          required={required}
        />
      ) : (
        <input
          className={`${styles.input} ${error ? styles.error : ""}`}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          id={id}
          autoComplete={autocomplete}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
          required={required}
        />
      )}
      {error && (
        <small className={styles.errorText} id={`${id}-error`} role="alert">
          {error}
        </small>
      )}
    </div>
  );
}
