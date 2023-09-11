import { FC } from "react";

let components: string[] = [];
let shortcutsMap: { [id: string]: IShortcut[] } = {};

const addShortCuts = (id: string, shortcuts: IShortcut[]) => {
  shortcutsMap[id] = shortcuts;
};

const removeShortCuts = (id: string): void => {
  delete shortcutsMap[id];
};

const addElement = (id: string): void => {
  components = [...components, id];
};

const removeElement = (id: string): void => {
  const filteredComponents: string[] = components.filter(
    (cId: string) => cId !== id
  );

  components = filteredComponents;
};

const getFocusedElementId = (): string | null => {
  return components.length ? components[components.length - 1] : null;
};

const handleKeyPress = (event: KeyboardEvent): void => {
  const focusedElementId: string = getFocusedElementId() || "";
  const shortcuts: IShortcut[] | undefined = shortcutsMap[focusedElementId];
  const pressedShortcut: IShortcut | undefined = shortcuts.find(
    (shortcut: IShortcut) =>
      shortcut.key === event.key && shortcut.ctrl === event.ctrlKey
  );

  if (pressedShortcut) {
    pressedShortcut.onKeyDown();
    event.preventDefault();
    event.stopImmediatePropagation();
  }
};

document?.addEventListener("keydown", handleKeyPress);
//ghjk
// return () => {
//   document?.removeEventListener("keydown", handleKeyPress);
// };

export interface IShortcut {
  key: string;
  ctrl: boolean;
  onKeyDown: () => void;
}

const withKeyboardShortcuts = (Component: FC<any>) => (props: any) => {
  // { id: string; shortcuts: IShortcut[] }
  const { id, shortcuts } = props;

  const onFocus = (): void => {
    addElement(id);
    addShortCuts(id, shortcuts);
  };

  const onBlur = (): void => {
    removeElement(id);
    removeShortCuts(id);
  };

  return <Component {...props} onFocus={onFocus} onBlur={onBlur} />;
};

export { withKeyboardShortcuts };

// CTrl + sdf

// Manage components and shortcusts map

// default shortcuts
