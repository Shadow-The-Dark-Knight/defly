import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

import React from "react";

export default function dButton({ variant, label, href }) {
  return (
    <div className="p-3 m-auto">
      <Link href={href}>
        <Button className={buttonVariants({ variant })}>{label}</Button>
      </Link>
    </div>
  );
}
