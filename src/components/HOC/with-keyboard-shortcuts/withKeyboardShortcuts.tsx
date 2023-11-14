import { FC } from "react";
import {
  IShortcut,
  ShortcutsHelper,
} from "../../shortcuts-helper/ShortcutsHelper";

const handleKeyPress = (event: KeyboardEvent): void => {
  const focusedElementId: string = ShortcutsHelper.getFocusedElementId() || "";
  const shortcuts: IShortcut[] | undefined =
    ShortcutsHelper.shortcutsMap[focusedElementId];
  const pressedShortcut: IShortcut | undefined = shortcuts.find(
    (shortcut: IShortcut) => {
      let modifierKeys: string[];
      let mainKey: string;

      if (shortcut.key.endsWith("++")) {
        modifierKeys = shortcut.key.split("++")[0].split("+");
        mainKey = "+";
      } else {
        modifierKeys = shortcut.key.split("+");
        mainKey = modifierKeys.splice(-1, 1)[0];
      }

      return (
        event.ctrlKey === modifierKeys.includes("ctrl") &&
        event.altKey === modifierKeys.includes("alt") &&
        event.shiftKey === modifierKeys.includes("shift") &&
        event.key === mainKey
      );
    }
  );

  if (pressedShortcut) {
    pressedShortcut.onKeyDown();
    event.preventDefault();
    event.stopImmediatePropagation();
  }
};

document?.addEventListener("keydown", handleKeyPress);
// return () => {
//   document?.removeEventListener("keydown", handleKeyPress);
// };

type IWithKeyboardShortcutsProps = {
  id: string;
  shortcuts: IShortcut[];
};

const withKeyboardShortcuts =
  (Component: FC<any>) =>
  ({ id, shortcuts, ...restProps }: any) => {
    const onFocus = (): void => {
      ShortcutsHelper.addElement(id);
      ShortcutsHelper.addShortcuts(id, shortcuts);
    };

    const onBlur = (): void => {
      ShortcutsHelper.removeElement(id);
      ShortcutsHelper.removeShortcuts(id);
    };

    return <Component {...restProps} onFocus={onFocus} onBlur={onBlur} />;
  };

export { withKeyboardShortcuts };

// Ctrl + sdf

// Manage components and shortcuts map

// default shortcuts

// Multiple focused elements
