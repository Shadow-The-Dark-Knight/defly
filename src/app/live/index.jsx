import React from "react";
import { X, Settings } from "lucide-react";
import Button from "@/components/mainButton";

export default function live() {
  return (
    <div className=" flex justify-end h-scroll mt-3 ">
      <div className="exit">
        <X />
      </div>

      <div>
        <Settings />
      </div>

      <div className="lg:w-4/12 md:w-8/12 bg-overlay rounded-md">
        <Button label="Quality" href="/setting" />
        <Button label="Controls" href="/control" />
        <Button label="Chat" href="/chat" />
        <Button label="Keybinds" href="keybinds" />
        <Button label="Mechanics" href="/theme" />
      </div>
      <div></div>
    </div>
  );
}
