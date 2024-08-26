import React from "react";

function FormPreview({ fields }) {
  return (
    <div style={{ width: "50%", padding: "20px", backgroundColor: "#f0f0f0" }}>
      <h2>Form Preview</h2>
      {fields.map((field, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <label>
            {field.label}
            {field.required && " *"}
          </label>
          {field.type === "StarRating" && (
            <input type="number" min="1" max="5" />
          )}
          {field.type === "SmileRating" && (
            <input type="number" min="1" max="5" />
          )}
          {field.type === "TextArea" && <textarea />}
          {field.type === "RadioButton" &&
            field.options.map((option, idx) => (
              <label key={idx}>
                <input type="radio" name={`radio-${index}`} />
                {option}
              </label>
            ))}
          {field.type === "Categories" &&
            field.options.map((option, idx) => (
              <label key={idx}>
                <input type="checkbox" />
                {option}
              </label>
            ))}
          {field.type === "NumericRating" && <input type="number" />}
          {field.type === "SingleLineInput" && <input type="text" />}
        </div>
      ))}
    </div>
  );
}

export default FormPreview;
