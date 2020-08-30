import React from "react";
import { leftPanelOptions } from "./options";
import "./left-panel.css";

const renderOptions = () => {
  return leftPanelOptions.map(option => {
    return <h1 className="post-user">{option.title}</h1>
  })
}

function LeftPanel() {
  console.log(leftPanelOptions);
  return (
    <div className="left-panel-container">
      <div className="card-base">
        {renderOptions()}
      </div>
    </div>
  );
}

export default LeftPanel;