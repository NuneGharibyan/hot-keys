import { Button } from "antd";
import { ReactElement, useEffect, useRef, useState } from "react";
import { TestModal } from "./modal/TestModal";
import { useKeyboardShortcuts } from "./useKeyboardShortcuts/useKeyboardShortcuts";

function App(): ReactElement {
  const componentRef = useRef(null);

  const [isVisible, setVisibility] = useState<boolean>(false);
  const [isVisible1, setVisibility1] = useState<boolean>(false);

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
      <Button
        type={"primary"}
        onClick={() => {
          setVisibility(true);
        }}
      >
        {"Open Modal"}
      </Button>
      <TestModal
        isVisible={isVisible}
        onCancel={() => setVisibility(false)}
        body={
          <Button
            type={"primary"}
            onClick={() => {
              setVisibility1(true);
            }}
          >
            {"open"}
          </Button>
        }
      />
      <TestModal
        isVisible={isVisible1}
        onCancel={() => setVisibility1(false)}
        body={
          <>
            <p>{"AASASAF"}</p>
            <p>{"AASASAF"}</p>
            <p>{"AASASAF"}</p>
          </>
        }
      />
    </div>
  );
}

export default App;
