"use client";

import { React, useState } from "react";
import { X, Settings } from "lucide-react";
import Button from "@/components/mainButton";
import { Checkbox } from "@/components/ui/checkbox";
import Label from "@/components/ui/terms";
import Control from "@/components/labels/control";

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

<<<<<<< HEAD
              <div className="flex items-center justify-center space-x-2 text-white">
=======
              <div className="flex items-center space-x-7 ">
>>>>>>> 52106017a96618d11e3289cc92c241855a47816d
                <Button label="Controls" href="/control" />
                <Control />
              </div>
              <Button label="Chat" href="/chat" />
              <Button label="Keybinds" href="/keybind" />
              <Button label="Mechanics" href="/mechanic" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
