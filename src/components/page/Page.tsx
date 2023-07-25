import React, { ReactElement, useContext, useEffect } from "react";
import { ComponentContext } from "../context/componentContext";

const Page: React.FC<{
  id: string;
  children: ReactElement;
}> = ({ id, children }) => {
  const { addElement, removeElement } = useContext(ComponentContext);

  useEffect(() => {
    addElement(id);
    console.log("page");
    return () => removeElement(id);
  }, []);

  return <div style={{ height: "100%", width: "100%" }}>{children}</div>;
};

export { Page };
