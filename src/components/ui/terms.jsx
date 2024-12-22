import React from "react";
import { Checkbox } from "./checkbox";

export default function Label({ text }) {
  return (
    <div className="flex items-center font-semibold text-white">
      <Checkbox />
      {text}
    </div>
  );
}
