import { Button, Modal } from "antd";
import React, { useRef, useState } from "react";
import { useKeyboardShortcuts } from "../useKeyboardShortcuts/useKeyboardShortcuts";

const TestModal: React.FC = () => {
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

  useKeyboardShortcuts({
    ref: modalRef,
    onKeyDown: () => {
      console.log("modal key down");
    },
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModal2Open(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type={"primary"} onClick={showModal}>
        {"Open Modal"}
      </Button>
      <Modal
        title={"Basic Modal"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        focusTriggerAfterClose={false}
      >
        <div tabIndex={0} ref={modalRef}>
          <p>{"Some contents..."}</p>
          <p>{"Some contents..."}</p>
          <p>{"Some contents..."}</p>
        </div>
      </Modal>
      <Modal
        title={"Basic Modal"}
        open={isModal2Open}
        onOk={handleOk}
        onCancel={() => setIsModal2Open(false)}
        focusTriggerAfterClose={false}
      >
        <p>{"222222"}</p>
      </Modal>
    </>
  );
};

export { TestModal };
