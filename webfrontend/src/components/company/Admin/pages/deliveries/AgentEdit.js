import React from "react";
import Control from "../../../../common/Control";

const handleInputChange = () => {
  console.log("aaaaaaaaaaaaaaaaaaaaaaafffffff");
};

export default function AgentEdit() {
  return (
    <div>
      <h1>Editing this page</h1>
      <Control.Input
        variant="outlined"
        label="Agent Name"
        name="name"
        value=""
        size="small"
        onChange={handleInputChange}
      />
    </div>
  );
}
