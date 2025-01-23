import { useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";

type Props = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
};

export default function PassIconInput({
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-1">
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          onBlur={onBlur}
          className="w-full rounded-full border border-primary-word/15 px-6 py-3 pl-12 focus:border-primary focus:outline-none"
        />
        <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 transform text-primary-word/50" />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          tabIndex={-1}
          className="absolute right-4 top-1/2 -translate-y-1/2 transform text-primary-word/50"
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
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
