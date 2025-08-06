type Props = {
  value: string;
  handeleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder: string;
  className?: string;
  error?: string;
  label?: string;
  title: string;
  labelClassName?: string;
  inputClassName?: string;
  rows?: number;
};

function PrimaryTextarea({
  value,
  handeleChange,
  required = false,
  title,
  placeholder,
  error = "",
  className = "",
  label = "",
  labelClassName = "",
  inputClassName = "",
  rows = 6,
}: Props) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={title}
        className={`block text-sm font-semibold text-primary-dark mb-2 ${labelClassName}`}
      >
        {label}
        {required && "*"}
      </label>
      <textarea
        rows={rows}
        id={title}
        name={title}
        value={value}
        onChange={handeleChange}
        required={required}
        className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none ${inputClassName} `}
        placeholder={placeholder}
      />
      {error && (
        <p
          className="text-red-500/90 text-base font-medium pl-2"
          style={{ overflowWrap: "anywhere" }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default PrimaryTextarea;
