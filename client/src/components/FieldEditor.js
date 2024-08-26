import React from "react";

function FieldEditor({ field, onUpdate }) {
  const handleChange = (key, value) => {
    onUpdate({ ...field, [key]: value });
  };

  return (
    <div
      style={{
        marginBottom: "20px",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <input
        type="text"
        placeholder="Label"
        value={field.label}
        onChange={(e) => handleChange("label", e.target.value)}
      />
      <input
        type="checkbox"
        checked={field.required}
        onChange={(e) => handleChange("required", e.target.checked)}
      />
      Required
      <input
        type="text"
        placeholder="Error Message"
        value={field.errorMessage}
        onChange={(e) => handleChange("errorMessage", e.target.value)}
      />
      {/* Conditionally render options for RadioButton and Categories */}
      {(field.type === "RadioButton" || field.type === "Categories") && (
        <div>
          <h4>Options:</h4>
          {field.options.map((option, idx) => (
            <input
              key={idx}
              type="text"
              value={option}
              onChange={(e) => {
                const newOptions = [...field.options];
                newOptions[idx] = e.target.value;
                handleChange("options", newOptions);
              }}
            />
          ))}
          <button
            onClick={() => handleChange("options", [...field.options, ""])}
          >
            Add Option
          </button>
        </div>
      )}
    </div>
  );
}

export default FieldEditor;
