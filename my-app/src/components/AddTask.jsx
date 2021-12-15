import React, { useState } from "react";
import Button from "./Button";
import "./AddTask.css";
import "./Button.css";

const AddTask = () => {
  const [inputData, setInputData] = useState("");

  return (
    <div className="add-task-container">
      <input className="add-task-input" type="text" />
      <div className="add-task-button-container">
        <Button>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
