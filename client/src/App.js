import React, { useState } from "react";
import FormBuilder from "./components/FormBuilder";
import FormPreview from "./components/FormPreview";

function App() {
  const [fields, setFields] = useState([]);

  return (
    <div style={{ display: "flex" }}>
      <FormBuilder fields={fields} setFields={setFields} />
      <FormPreview fields={fields} />
    </div>
  );
}

export default App;
