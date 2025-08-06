import { useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";

type Props = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  title: string;
  label: string;
  required?: boolean;
  showStrength?: boolean;
};

export default function PasswordInput({
  placeholder,
  value,
  onChange,
  title,
  label,
  onBlur,
  error,
  required = false,
  showStrength = false,
}: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [strength, setStrength] = useState<{
    strength: number;
    label: string;
    color: string;
  }>({ strength: 0, label: "", color: "bg-gray-200" });

  const checkPasswordStrength = (password: string) => {
    if (!password) {
      setStrength({ strength: 0, label: "", color: "bg-gray-200" });
      return;
    }

    let score = 0;

    // Check length (at least 8 characters)
    if (password.length >= 8) {
      score++;
    }

    // Check for lowercase letters
    if (password.match(/[a-z]/)) {
      score++;
    }

    // Check for uppercase letters
    if (password.match(/[A-Z]/)) {
      score++;
    }

    // Check for numbers
    if (password.match(/[0-9]/)) {
      score++;
    }

    // Check for special characters
    if (password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
      score++;
    }

    // Set strength based on score
    if (score === 1) {
      setStrength({ strength: 1, label: "Weak", color: "bg-red-400" });
    } else if (score === 2) {
      setStrength({ strength: 2, label: "Fair", color: "bg-yellow-400" });
    } else if (score === 3) {
      setStrength({ strength: 3, label: "Good", color: "bg-blue-400" });
    } else if (score === 4) {
      setStrength({ strength: 4, label: "Strong", color: "bg-green-400" });
    } else if (score === 5) {
      setStrength({ strength: 4, label: "Very Strong", color: "bg-green-600" });
    } else {
      setStrength({ strength: 1, label: "Too Weak", color: "bg-red-300" });
    }
  };
  return (
    <div className="flex flex-col gap-0.5">
      <label
        htmlFor={title}
        className={`block text-sm font-semibold text-primary-dark mb-2`}
      >
        {label}
        {required && "*"}
      </label>
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-full border border-primary-word/15 px-4 py-3 focus-within:border-primary">
        <FiLock className="text-primary-word/50" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          onChange={(e) => {
            const newValue = e.target.value;
            onChange(newValue);
            if (showStrength) {
              checkPasswordStrength(newValue);
            }
          }}
          value={value}
          title={title}
          id={title}
          required={required}
          onBlur={onBlur}
          className="w-full bg-transparent focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          tabIndex={-1}
          className="text-primary-word/50 cursor-pointer"
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
      {showStrength && strength.strength >= 1 && (
        <div className="mt-2">
          <div className="flex items-center gap-2">
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className={`h-2 w-6 rounded-full ${
                  i < strength.strength ? strength.color : "bg-gray-200"
                }`}
              ></div>
            ))}
            {/* <div className={`h-2 w-2 rounded-full ${strength.color}`}></div> */}
            <p className="text-sm font-medium text-primary-word/80">
              {strength.label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
