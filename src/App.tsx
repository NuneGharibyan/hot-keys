import { Button } from "antd";
import { ReactElement, useState } from "react";
import { TestModal } from "./components/modal/TestModal";
import { Page } from "./components/page/Page";
import { useKeyboardShortcuts } from "./components/useKeyboardShortcuts/useKeyboardShortcuts";

function App(): ReactElement {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const [isVisible1, setVisibility1] = useState<boolean>(false);

  useKeyboardShortcuts({
    key: "page-1",
    onKeyDown: () => {
      alert("Key a was pressed COMPONENT");
    },
  });

  return (
    <Page id={"page-1"}>
      <div tabIndex={-1}>
        <Button
          type={"primary"}
          onClick={() => {
            setVisibility(true);
          }}
        >
          {"Open Modal"}
        </Button>
        <TestModal
          id={"modal-1"}
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
          id={"modal-2"}
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
    </Page>
  );
}

export default App;
