import React from "react";
import Button from "@/components/mainButton";
import Label from "./terms";

export default function Keybind() {
  return (
    <div className="grid grid-cols-3 gap-1 items-center ">
      <Label text="Move up" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Label text="Move down" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Label text="Move left" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Label text="Move right" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Label text="Shoot" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
    </div>
  );
}
