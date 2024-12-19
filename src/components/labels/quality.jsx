import React from "react";
import Button from "@/components/mainButton";

export default function Quality() {
  return (
    <div className="grid grid-cols-3 gap-1 ">
      <Button label="High" href="/setting" variant="secondary" />
      <Button label="Medium" href="/setting" variant="secondary" />
      <Button label="Low" href="/setting" variant="secondary" />
      <Button label="Light" href="/setting" variant="secondary" />
      <Button label="Dark" href="/setting" variant="secondary" />
      <Button label="Color-Blind" href="/setting" variant="secondary" />
    </div>
  );
}
