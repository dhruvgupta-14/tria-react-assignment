import React from "react";

const InputField = ({ label, name, value, onChange, type = "text", required = false,className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="text-sm font-medium text-gray-600 mb-1">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-primary w-full"
      />
    </div>
  );
};

export default InputField;
