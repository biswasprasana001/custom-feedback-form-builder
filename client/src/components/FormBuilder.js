import React from "react";
import FieldEditor from "./FieldEditor";

function FormBuilder({ fields, setFields }) {
  const addField = (type) => {
    if (fields.length < 7) {
      setFields([
        ...fields,
        { type, label: "", required: false, errorMessage: "", options: [] },
      ]);
    }
  };

  const updateField = (index, updatedField) => {
    const newFields = fields.map((field, i) =>
      i === index ? updatedField : field
    );
    setFields(newFields);
  };

  return (
    <div style={{ width: "50%", padding: "20px" }}>
      <h2>Form Builder</h2>
      <div>
        <button onClick={() => addField("StarRating")}>Add Star Rating</button>
        <button onClick={() => addField("SmileRating")}>
          Add Smile Rating
        </button>
        <button onClick={() => addField("TextArea")}>Add Text Area</button>
        <button onClick={() => addField("RadioButton")}>
          Add Radio Buttons
        </button>
        <button onClick={() => addField("Categories")}>Add Categories</button>
        <button onClick={() => addField("NumericRating")}>
          Add Numeric Rating
        </button>
        <button onClick={() => addField("SingleLineInput")}>
          Add Single Line Input
        </button>
      </div>

      {fields.map((field, index) => (
        <FieldEditor
          key={index}
          field={field}
          onUpdate={(updatedField) => updateField(index, updatedField)}
        />
      ))}
    </div>
  );
}

export default FormBuilder;
