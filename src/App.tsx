import { Button } from "antd";
import { ReactElement, useState } from "react";
import { withKeyboardShortcuts } from "./components/HOC";
import { TestModal } from "./components/modal/TestModal";
import { Page } from "./components/page/Page";

const Modal = withKeyboardShortcuts(TestModal);
const PageComponent = withKeyboardShortcuts(Page);

function App(): ReactElement {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const [isVisible1, setVisibility1] = useState<boolean>(false);

  const onPageKeyDown = (): void => {
    alert("Page key down");
  };

  return (
    <PageComponent id={"page-1"} onKeyDown={onPageKeyDown}>
      <div tabIndex={-1}>
        <Button
          type={"primary"}
          onClick={() => {
            setVisibility(true);
          }}
        >
          {"Open Modal"}
        </Button>
        <Modal
          id={"modal-1"}
          isVisible={isVisible}
          onKeyDown={() => setVisibility(false)}
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
        <Modal
          id={"modal-2"}
          isVisible={isVisible1}
          onKeyDown={() => setVisibility1(false)}
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
    </PageComponent>
  );
}

export default App;
