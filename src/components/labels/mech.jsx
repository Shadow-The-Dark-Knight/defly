import React from "react";
import Button from "@/components/mainButton";
import Title from "../ui/title";
import Label from "./terms";

export default function Mechanic() {
  return (
    <div className="grid grid-cols-3 items-center gap-1">
      <Label text="Superpower" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Title text="Turn left" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Title text="Turn right" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Title text="Show teamates" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Title text="Move with mouse" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
    </div>
  );
}
