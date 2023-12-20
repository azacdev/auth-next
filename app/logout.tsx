"use client";

import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

export default function LogOut() {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
      variant="default"
    >
      Logout
    </Button>
  );
}
