import { useCallback, useEffect } from "react";

function useKeyboardShortcuts({
  ref,
  onKeyDown,
}: {
  ref: any;
  onKeyDown: () => void;
}) {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      console.log(ref.current, document.activeElement);
      if (ref.current === document.activeElement) {
        onKeyDown();
        // event.stopImmediatePropagation();
      }
    },
    [onKeyDown, ref]
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
