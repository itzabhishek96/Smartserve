"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("577ec894-d750-4831-be6e-88bd01db9666");
  }, []);

  return null;
};