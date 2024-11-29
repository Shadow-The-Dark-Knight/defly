import React from "react";
import { X, Settings } from "lucide-react";
import Button from "@/components/mainButton";
import SButton from "@/components/secondaryButton";

export default function page() {
  return (
    <div className=" flex justify-end h-scroll mt-3 ">
      <div className="lg:w-4/12 md:w-8/12 bg-overlay rounded-md flex">
        <div>
          <Button label="Quality" href="/setting" />
          <Button label="Controls" href="/control" />
          <Button label="Chat" href="/chat" />
          <Button label="Keybinds" href="keybinds" />
          <Button label="Mechanics" href="/theme" />
        </div>
        <div className="grid grid-cols-3 h-2">
          <SButton label="High" href="/setting" className="bg-red-300" />
          <SButton label="Medium" href="/setting" className="bg-red-300" />
          <SButton label="Low" href="/setting" className="bg-red-300" />
          <SButton label="Light" href="/setting" className="bg-red-300" />
          <SButton label="Dark" href="/setting" className="bg-red-300" />
          <SButton label="Color-Blind" href="/setting" className="bg-red-300" />
        </div>
        <div>
          <X className="text-white" id="exit" />
        </div>
      </div>
      <div></div>
    </div>
  );
}
