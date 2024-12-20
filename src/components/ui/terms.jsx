import React from "react";
import { Checkbox } from "./checkbox";

export default function Label({ text }) {
  return (
    <div className="flex items-center text-white font-semibold">
      <Checkbox />
      {text}
    </div>
  );
}
