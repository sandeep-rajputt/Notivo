import React from "react";
import { IconType } from "react-icons";

type Props = {
  placeholder: string;
  type: string;
  value: string | number;
  onChange: (value: string | number) => void;
  onBlur?: () => void;
  error?: string;
  icon: IconType;
  required: boolean;
  title: string;
  label: string;
};

export default function PrimaryIconInput({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  icon: Icon,
  required = false,
  title,
  label,
}: Props) {
  return (
    <div className="flex flex-col gap-0.5">
      <label
        htmlFor={title}
        className={`block text-sm font-semibold text-primary-dark mb-2`}
      >
        {label}
        {required && "*"}
      </label>
      <div className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-full border border-primary-word/15 px-4 py-3 focus-within:border-primary">
        <Icon className="text-primary-word/50" />
        <input
          type={type}
          value={value}
          onBlur={onBlur}
          id={title}
          name={title}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="w-full bg-transparent focus:outline-none"
        />
      </div>
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
