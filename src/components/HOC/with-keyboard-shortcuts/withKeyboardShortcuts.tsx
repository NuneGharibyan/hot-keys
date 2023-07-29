import { FC, useCallback, useContext, useEffect } from "react";
import { ComponentContext } from "../../context/componentContext";

const withKeyboardShortcuts = (Component: FC<any>) => (props: any) => {
  const { addElement, removeElement, getTopElementId } =
    useContext(ComponentContext);

  const { id, onKeyDown } = props;

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (id === getTopElementId()) {
        onKeyDown();
        // event.stopImmediatePropagation();
      }
    },
    [onKeyDown, id, getTopElementId]
  );

  useEffect(() => {
    document?.addEventListener("keydown", handleKeyPress);

    return () => {
      document?.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Component
      {...props}
      onFocus={() => addElement(id)}
      onBlur={() => removeElement(id)}
    />
  );
};

export { withKeyboardShortcuts };
