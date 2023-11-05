import { useRef } from "react";

export const useLikes = () => {
  const ref = useRef<HTMLInputElement>(null); //////////////////////////////// lIKE hook

  const clikButon = () => {
    ref.current.focus();
  };

  return { clikButon, ref };
};
