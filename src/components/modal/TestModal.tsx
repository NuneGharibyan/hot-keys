import { Modal } from "antd";
import React, { useEffect } from "react";

const TestModal: React.FC<{
  isVisible: boolean;
  onCancel: () => void;
  body: any;
  onFocus?: () => void;
  onBlur?: () => void;
}> = ({ isVisible, onCancel, body, onFocus, onBlur }) => {
  useEffect(() => {
    if (isVisible) {
      onFocus?.();
    } else {
      onBlur?.();
    }
    console.log("modal");
    //TODO: add onFocus and onBlur to the dependency array with use callback
  }, [isVisible]);

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
    >
      <div>{body}</div>
    </Modal>
  );
};

export { TestModal };
