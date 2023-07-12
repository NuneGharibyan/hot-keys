import { Modal } from "antd";
import React, { useEffect, useRef } from "react";
import { useKeyboardShortcuts } from "../useKeyboardShortcuts/useKeyboardShortcuts";

const TestModal: React.FC<{
  isVisible: boolean;
  onCancel: () => void;
  body: any;
}> = ({ isVisible, onCancel, body }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      console.log("focus modal", modalRef);
      (modalRef.current as any)?.focus();
    }
  }, [isVisible]);

  useKeyboardShortcuts({
    ref: modalRef,
    onKeyDown: () => {
      // alert(`Key a was pressed MODAL ${body}`);
      onCancel();
    },
  });

  const handleOk = () => {
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal
      title={"Basic Modal"}
      open={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      focusTriggerAfterClose={false}
    >
      <div tabIndex={0} ref={modalRef}>
        {body}
      </div>
    </Modal>
  );
};

export { TestModal };
