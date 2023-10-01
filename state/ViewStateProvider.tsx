"use client";

import { AnimationViewProps } from "@/components/AnimationView";
import usePathnames from "@/utility/usePathnames";
import React, { createContext, useState, useContext, useEffect } from "react";

type ViewStateProps = {
  previousPathname?: string;
  hasLoaded?: boolean;
  setHasLoaded?: React.Dispatch<React.SetStateAction<boolean>>;
  nextViewAnimation?: AnimationViewProps | null;
  setNextViewAnimation?: React.Dispatch<React.SetStateAction<AnimationViewProps | null>>;
  clearNextViewAnimation?: () => void;
};
const ViewStateContext = createContext<ViewStateProps>({
  previousPathname: undefined,
  hasLoaded: undefined,
  setHasLoaded: undefined,
  nextViewAnimation: undefined,
  setNextViewAnimation: undefined,
  clearNextViewAnimation: undefined,
});

export const useViewState = () => useContext(ViewStateContext);

export const ViewStateProvider = ({ children }: { children: React.ReactNode }) => {

  const { previousPathname } = usePathnames();

  const [hasLoaded, setHasLoaded] = useState(false);

  const [nextViewAnimation, setNextViewAnimation] = useState<AnimationViewProps | null>(null);

  useEffect(() => {
    setHasLoaded?.(true);
  }, [setHasLoaded]);

  return (
    <ViewStateContext.Provider 
      value={{ 
        previousPathname,
        hasLoaded,
        setHasLoaded,
        nextViewAnimation,
        setNextViewAnimation,
        clearNextViewAnimation: () => setNextViewAnimation?.(null),
      }}
    >
      {children}
    </ViewStateContext.Provider>
  );
};