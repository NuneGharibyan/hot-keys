import { Modal } from "antd";
import React, { useContext, useEffect } from "react";
import { ComponentContext } from "../context/componentContext";
import { useKeyboardShortcuts } from "../useKeyboardShortcuts/useKeyboardShortcuts";

const TestModal: React.FC<{
  id: string;
  isVisible: boolean;
  onCancel: () => void;
  body: any;
}> = ({ id, isVisible, onCancel, body }) => {
  const { addElement, removeElement } = useContext(ComponentContext);

  useEffect(() => {
    if (isVisible) {
      addElement(id);
    } else {
      removeElement(id);
    }
    console.log("modal");
  }, [isVisible, id]);

  useKeyboardShortcuts({
    key: id,
    onKeyDown: () => {
      // alert(`Key a was pressed MODAL ${body}`);
      onCancel();
    },
  });

  const handleOk = (): void => {
    onCancel();
  };

  const handleCancel = (): void => {
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
      <div tabIndex={0}>{body}</div>
    </Modal>
  );
};

export { TestModal };
