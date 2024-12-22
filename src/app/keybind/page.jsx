"use client";

import { React, useState } from "react";
import { X, Settings } from "lucide-react";
import Button from "@/components/mainButton";
import Keybind from "@/components/labels/keybind";

export default function Live() {
  const [isOpen, setOpen] = useState(false);

  const toggleSetting = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="h-scroll mt-3 flex justify-end">
      {/* ! is used to put compoent in previous state*/}
      {isOpen && (
        <Settings className="h-12 w-20 text-white" onClick={toggleSetting} />
      )}

      {!isOpen && (
        <div className="h-scroll mt-1.5 rounded-md bg-overlay px-1 md:w-8/12 lg:w-4/12">
          <div className="flex justify-end">
            <X
              className="h-7 w-12 cursor-pointer items-end text-white"
              onClick={toggleSetting}
            />
          </div>
          <div className="flex">
            <div className="px-7">
              <Button label="Quality" href="/setting" />
              <Button label="Controls" href="/control" />
              <Button label="Chat" href="/chat" />
              <Button label="Keybinds" href="/keybind" />
              <Button label="Mechanics" href="/mechanic" />
            </div>
            <div className="mt-[175px]">
              <Keybind />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
