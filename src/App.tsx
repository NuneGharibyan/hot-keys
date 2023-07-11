import { Button } from "antd";
import { ReactElement, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { TestModal } from "./modal/TestModal";

function App(): ReactElement {
  const ref = useHotkeys("a", () => alert("Key a was pressed COMPONENT"));

  const [isVisible, setVisibility] = useState<boolean>(false);
  const [isVisible1, setVisibility1] = useState<boolean>(false);

  const onClick = (): void => {
    console.log("page button onclick");
  };

  return (
    <div tabIndex={-1} ref={ref as any}>
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
          <div tabIndex={-1}>
            <Button
              type={"primary"}
              onClick={() => {
                setVisibility1(true);
              }}
            >
              {"open"}
            </Button>
          </div>
        }
      />
      <TestModal
        isVisible={isVisible1}
        onCancel={() => setVisibility1(false)}
        body={
          <div tabIndex={-1}>
            <p>{"AASASAF"}</p>
            <p>{"AASASAF"}</p>
            <p>{"AASASAF"}</p>
          </div>
        }
      />
    </div>
  );
}

export default App;
