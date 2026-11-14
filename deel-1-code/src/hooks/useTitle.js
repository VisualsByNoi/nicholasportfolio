import { useEffect } from "react";

export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Nicholas Faas` : "Nicholas Faas — Frontend developer";
  }, [title]);
}
