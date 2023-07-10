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

  const reff = ref.current;
  useEffect(() => {
    console.log(reff);
    // attach the event listener
    document?.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document?.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
}

export { useKeyboardShortcuts };
