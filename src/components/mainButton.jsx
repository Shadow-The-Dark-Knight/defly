import { Button } from "./ui/button";
import Link from "next/link";

import React from "react";

export default function dButton({ label, href }) {
  return (
    <div className="w-full p-3 m-auto">
      <Link href={href}>
        <Button className="bg-[#3d5dff] text-white w-[100px] h-10">
          {label}
        </Button>
      </Link>
    </div>
  );
}
