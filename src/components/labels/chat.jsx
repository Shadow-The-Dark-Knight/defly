import React from "react";
import Label from "../ui/terms";
import Title from "../ui/title";

export default function Chat() {
  return (
    <div className="flex flex-col">
      <Label text="Disable Chat" />
      <Label text="Disable Log" />
      <Title text="Text Size" />
      <div className="flex flex-row space-x-2">
        <Label text="Small" />
        <Label text="Medium" />
        <Label text="Large" />
      </div>
    </div>
  );
}
