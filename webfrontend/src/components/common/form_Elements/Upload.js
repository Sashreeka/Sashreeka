import React from "react";

export default function Upload(props) {
  const { label, name } = props;
  return (
    <div style={{ marginLeft: 2 }}>
      <span style={{ fontSize: 14 }}>{label}</span>
      <input
        style={{ maxWidth: 350, marginBottom: 20, marginTop: 5 }}
        class="form-control form-control-sm"
        id="formFileSm"
        type="file"
        name={name}
      />
    </div>
  );
}
