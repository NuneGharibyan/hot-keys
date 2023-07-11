import { ReactElement, useEffect, useRef } from "react";
import { TestModal } from "./modal/TestModal";
import { useKeyboardShortcuts } from "./useKeyboardShortcuts/useKeyboardShortcuts";

function App(): ReactElement {
  const componentRef = useRef(null);

  useEffect(() => {
    (componentRef as any)?.current.focus();
  }, [componentRef]);

  useKeyboardShortcuts({
    ref: componentRef,
    onKeyDown: () => {
      alert("Key a was pressed COMPONENT");
    },
  });

  const onClick = (): void => {
    console.log("page button onclick");
  };

  return (
    <div tabIndex={-1} ref={componentRef}>
      <button onClick={onClick}>{"sdfa"}</button>
      <TestModal></TestModal>
    </div>
  );
}

export default App;
