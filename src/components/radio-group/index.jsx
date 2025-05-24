import React from "react";

const RadioGroup = ({ title, options = [], name, selectedValue, onChange }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">{title}</h2>
      <div className="space-y-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center">
            <input
              type="radio"
              name={name}
              className="form-radio text-primary rounded !rounded-button"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
            />
            <span className="ml-2 text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
