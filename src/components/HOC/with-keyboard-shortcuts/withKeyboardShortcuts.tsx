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
        console.log(event.key);
        if (event.ctrlKey === true) {
          console.log(`Key pressed: ${event.key}`);
        }
      }
    },
    [onKeyDown, id, getTopElementId]
  );

  useEffect(() => {
    document?.addEventListener("keydown", handleKeyPress);
    //ghjk
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
