"use client";
import React, { memo } from "react";
import { VscLoading } from "react-icons/vsc";

type Props = {
  loading?: boolean;
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  className?: string;
  title?: string;
  disabled?: boolean;
  handleClick?: () => void;
  ariaLabel?: string;
};

function PrimaryButton({
  loading = false,
  children,
  type = "button",
  title = "",
  className = "",
  disabled = false,
  handleClick = () => null,
  ariaLabel,
}: Props) {
  const isDisabled = disabled || loading;
  const accessibleLabel =
    ariaLabel || title || (typeof children === "string" ? children : "Button");

  return (
    <button
      title={title || accessibleLabel}
      aria-label={accessibleLabel}
      aria-busy={loading}
      aria-disabled={isDisabled}
      className={`w-full rounded-full px-5 bg-primary py-2 text-white disabled:cursor-not-allowed cursor-pointer ${className} ${
        loading ? "cursor-wait" : ""
      } ${!isDisabled ? "hover:bg-primary-light" : ""}`}
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {loading ? (
        <VscLoading className="animate-spin h-6 w-6 text-white mx-auto" />
      ) : (
        children
      )}
    </button>
  );
}

export default memo(PrimaryButton);
