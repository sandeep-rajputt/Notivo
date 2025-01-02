"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./index";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}

export * from "react-redux";