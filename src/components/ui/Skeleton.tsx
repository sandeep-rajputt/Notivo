"use client";

type Props = {
  width?: string;
  height?: string;
  circle?: boolean;
  shimmer?: boolean;
  className?: string;
};

const Skeleton = ({
  width = "w-full",
  height = "h-4",
  circle = false,
  shimmer = true,
  className = "",
}: Props) => {
  return (
    <div
      className={`${width} ${height} ${
        circle ? "rounded-full" : "rounded"
      } bg-gray-300 
        ${
          shimmer
            ? "bg-gradient-to-r from-skeleton via-skeleton-secondary to-skeleton animate-shimmer"
            : ""
        } ${className}`}
      style={{
        backgroundSize: "200% 100%",
        animation: shimmer ? "shimmer 1.5s infinite linear" : "none",
      }}
    ></div>
  );
};

export default Skeleton;
