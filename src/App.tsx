import { ReactElement, useEffect, useRef } from "react";
import { TestModal } from "./modal/TestModal";
import { useKeyboardShortcuts } from "./useKeyboardShortcuts/useKeyboardShortcuts";

function App(): ReactElement {
  const componentRef = useRef(null);

  useEffect(() => {
    console.log("0000");
    (componentRef as any)?.current.focus();
  }, [componentRef]);

  useKeyboardShortcuts({
    ref: componentRef,
    onKeyDown: () => {
      console.log("component click");
    },
  });

  const onClick = (): void => {
    console.log("page button onclick");
  };

  return (
    <div tabIndex={0} ref={componentRef}>
      <button onClick={onClick}>{"sdfa"}</button>
      <TestModal></TestModal>
    </div>
  );
}

export default App;
