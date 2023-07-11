import { Modal } from "antd";
import React from "react";
import { useHotkeys } from "react-hotkeys-hook";

const TestModal: React.FC<{
  isVisible: boolean;
  onCancel: () => void;
  body: any;
}> = ({ isVisible, onCancel, body }) => {
  const ref = useHotkeys("a", () => {
    alert("Key a was pressed MODAL");
    handleCancel();
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
      <div tabIndex={-1} ref={ref as any}>
        {body}
      </div>
    </Modal>
  );
};

export { TestModal };
