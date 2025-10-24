import React from "react";

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  className = "",
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-600 mb-1 truncate">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200"
      />
    </div>
  );
};

export default InputField;

