import React from "react";
import Button from "@/components/mainButton";
import Label from "./terms";

export default function Mechanic() {
  return (
    <div className="grid grid-cols-3 gap-1 items-center ">
      <Label text="Superpower" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Label text="Turn left" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Label text="Turn right" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Label text="Show teamates" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Label text="Move with mouse" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
    </div>
  );
}
