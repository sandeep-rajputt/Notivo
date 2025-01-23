"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./index";
import { SessionProvider } from "next-auth/react";
import FetchUser from "@components/utility/FetchUser";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <FetchUser>{children}</FetchUser>
      </SessionProvider>
    </Provider>
  );
}

export * from "react-redux";
