"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, clearUserData } from "@store/slices/userDataSlice";
import type { AppDispatch } from "@store/index";
import { RootState } from "@store/index";
import { useSession } from "next-auth/react";
import Loader from "@components/ui/Loader";

export default function FetchUser({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status } = useSelector((state: RootState) => state.userData);
  const { data: session } = useSession();
  const [initialLoad, setInitialLoad] = useState<boolean>(false);
  useEffect(() => {
    if (session?.user && status === "idle") {
      dispatch(fetchUserData());
    } else if (!session?.user && data) {
      dispatch(clearUserData());
    } else if (!initialLoad) {
      setInitialLoad(true);
    }
  }, [dispatch, session, status, data]);

  if (session?.user && (status === "succeeded" || status === "failed")) {
    return children;
  }
  if (initialLoad) {
    return children;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader />
    </div>
  );
}
