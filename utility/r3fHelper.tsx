"use client";
import React from "react";
import tunnel from "tunnel-rat";

export const r3f = tunnel();

export const Three = ({ children }: { children: React.ReactNode }) => {
  return <r3f.In>{children}</r3f.In>
}