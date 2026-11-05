"use client";

import { useEffect } from "react";
import { createDemoAdmin } from "@/lib/storage";

export default function InitializeDemoAdmin() {
  useEffect(() => {
    createDemoAdmin();
  }, []);

  return null;
}