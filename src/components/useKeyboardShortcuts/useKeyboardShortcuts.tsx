import { useCallback, useContext, useEffect } from "react";
import { ComponentContext } from "../context/componentContext";

function useKeyboardShortcuts({
  key,
  onKeyDown,
}: {
  key: string;
  onKeyDown: () => void;
}) {
  const { getTopElementId } = useContext(ComponentContext);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      console.log(key);
      if (key === getTopElementId()) {
        onKeyDown();
        // event.stopImmediatePropagation();
      }
    },
    [onKeyDown, key, getTopElementId]
  );

  // const reff = ref.current;
  useEffect(() => {
    document?.addEventListener("keydown", handleKeyPress);

    return () => {
      document?.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
}

export { useKeyboardShortcuts };
