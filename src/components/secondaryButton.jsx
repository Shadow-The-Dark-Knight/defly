import { Button } from "./ui/button";

import React from "react";

export default function buttonFun({ label }) {
  return (
    <div className="w-full p-3 m-auto">
      <Button className="bg-[#ff9c4c] text-white w-[100px] h-10">
        {label}
      </Button>
    </div>
  );
}
