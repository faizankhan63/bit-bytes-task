import React from "react";

const CheckboxGroup = ({
  title,
  name,
  selectedValue = [],
  onChange,
  options = [],
}) => {
  const handleChange = (value) => {
    if (selectedValue.includes(value)) {
      onChange(selectedValue.filter((v) => v !== value));
    } else {
      onChange([...selectedValue, value]);
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">{title}</h2>
      <div className="space-y-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center">
            <input
              type="checkbox"
              name={name}
              value={option.value}
              className="form-checkbox text-primary rounded !rounded-button"
              checked={selectedValue.includes(option.value)}
              onChange={() => handleChange(option.value)}
            />
            <span className="ml-2 text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
