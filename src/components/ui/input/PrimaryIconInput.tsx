import React from "react";
import { IconType } from "react-icons"; // Type for react-icons components

type Props = {
  placeholder: string;
  type: string;
  value: string | number;
  onChange: (value: string | number) => void;
  onBlur?: () => void;
  error?: string;
  icon: IconType;
};

export default function PrimaryIconInput({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  icon: Icon,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative">
        <input
          type={type}
          value={value}
          onBlur={onBlur}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-full border border-primary-word/15 px-6 py-3 pl-12 focus:border-primary focus:outline-none"
        />
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 transform text-primary-word/50" />
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
