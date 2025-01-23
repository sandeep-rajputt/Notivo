const data: string[] = [
  "Password must be at least 8 characters long",
  "Password must not exceed 20 characters",
  "Password must contain at least one lowercase",
  "Password must contain at least one uppercase",
  "Password must contain at least one number",
];

const PasswordRequirements = () => {
  return (
    <div className="border border-primary-word/15 p-3 flex flex-col gap-1 text-sm text-primary-word/70 rounded-xl">
      {data.map((item, index) => {
        return (
          <div key={index} className="flex">
            <p className="flex">
              <span className="pr-1">&#9755;</span>
              {item}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PasswordRequirements;
