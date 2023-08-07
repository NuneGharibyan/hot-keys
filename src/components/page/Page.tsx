import React, { ReactElement, useEffect } from "react";

const Page: React.FC<{
  children: ReactElement;
  onFocus?: () => void;
  onBlur?: () => void;
}> = ({ children, onFocus, onBlur }) => {
  useEffect(() => {
    onFocus?.();

    return () => onBlur?.();
  });

  return <div style={{ height: "100%", width: "100%" }}>{children}</div>;
};

export { Page };
