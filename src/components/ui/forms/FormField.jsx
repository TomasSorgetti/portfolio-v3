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
    <div className="flex flex-col items-start gap-2 w-full relative mb-5">
      <label
        htmlFor={id}
        className={`text-xl font-bold relative ${required && ""}`}
      >
        {label}
      </label>
      {name === "message" ? (
        <textarea
          className={`h-52 resize-none w-full bg-white border border-[#acacac8c] rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-black text-[18px] font-medium p-4 ${
            error ? "error" : ""
          }`}
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
          className={`h-20 w-full bg-white border border-[#acacac8c] rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-black text-[18px] font-medium p-4 ${
            error ? "error" : ""
          }`}
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
        <small
          className="text-red-500 absolute bottom-[-22px] left-2"
          id={`${id}-error`}
          role="alert"
        >
          {error}
        </small>
      )}
    </div>
  );
}
