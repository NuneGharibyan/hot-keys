import { Button } from "antd";
import { ReactElement, useState } from "react";
import { withKeyboardShortcuts } from "./components/HOC";
import { IShortcut } from "./components/HOC/with-keyboard-shortcuts/withKeyboardShortcuts";
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

  const pageShortcuts: IShortcut[] = [
    {
      key: "p",
      ctrl: true,
      onKeyDown: onPageKeyDown,
    },
  ];

  const onCloseDialog = (): void => {
    setVisibility(false);
  };

  //TODO: move to modal default shortcuts

  const modalShortcuts: IShortcut[] = [
    {
      key: "Escape",
      ctrl: false,
      onKeyDown: onCloseDialog,
    },
  ];

  const onCloseDialog1 = (): void => {
    setVisibility1(false);
  };

  const modal1Shortcuts: IShortcut[] = [
    {
      key: "Escape",
      ctrl: false,
      onKeyDown: onCloseDialog1,
    },
  ];

  return (
    <PageComponent id={"page"} shortcuts={pageShortcuts}>
      <div>
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
          onCancel={onCloseDialog}
          shortcuts={modalShortcuts}
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
          shortcuts={modal1Shortcuts}
          onCancel={onCloseDialog1}
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
