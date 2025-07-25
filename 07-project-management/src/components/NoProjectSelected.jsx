import React from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="mt-1 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or create a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create a new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
