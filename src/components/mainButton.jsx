import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

import React from "react";

export default function dButton({ variant, label, href, onClick }) {
  return (
    <div className="m-auto p-3">
      <Link href={href}>
        <Button
          className={`${buttonVariants({ variant })} font-semibold`}
          onClick={onClick}
        >
          {label}
        </Button>
      </Link>
    </div>
  );
}
