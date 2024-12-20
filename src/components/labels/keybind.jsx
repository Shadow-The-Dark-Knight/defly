import React from "react";
import Button from "@/components/mainButton";
import Title from "../ui/title";

export default function Keybind() {
  return (
    <div className="grid grid-cols-3 gap-1 items-center ">
      <Title text="Move up" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Title text="Move down" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Title text="Move left" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Title text="Move right" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
      <Title text="Shoot" />
      <Button label="" href="" variant="secondary" />
      <Button label="" href="" variant="secondary" />
    </div>
  );
}
