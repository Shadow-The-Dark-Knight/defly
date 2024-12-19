"use client";

import { React, useState } from "react";
import { X, Settings } from "lucide-react";
import Button from "@/components/mainButton";

export default function Live() {
  const [isOpen, setOpen] = useState(false);

  const toggleSetting = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className=" flex justify-end h-scroll mt-3 ">
      {/* ! is used to put compoent in previous state*/}
      {!isOpen && (
        <Settings className="text-white h-12 w-20" onClick={toggleSetting} />
      )}

      {isOpen && (
        <div className=" h-scroll mt-1.5  bg-overlay rounded-md lg:w-4/12 md:w-8/12 px-1 ">
          <div className="flex justify-end">
            <X
              className=" text-white items-end cursor-pointer h-7 w-12"
              onClick={toggleSetting}
            />
          </div>
          <div className="flex">
            <div className="px-7">
              <Button label="Quality" href="/setting" />
              <Button label="Controls" href="/control" />
              <Button label="Chat" href="/chat" />
              <Button label="Keybinds" href="keybinds" />
              <Button label="Mechanics" href="/theme" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
