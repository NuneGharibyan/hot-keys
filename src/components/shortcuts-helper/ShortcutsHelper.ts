export interface IShortcut {
  key: string;
  onKeyDown: () => void;
}

class ShortcutsHelper {
  private static components: string[] = [];
  static readonly shortcutsMap: { [id: string]: IShortcut[] } = {};

  static addShortcuts = (id: string, shortcuts: IShortcut[]): void => {
    this.shortcutsMap[id] = shortcuts;
  };

  static removeShortcuts = (id: string): void => {
    delete this.shortcutsMap[id];
  };

  static addElement = (id: string): void => {
    this.components = [...this.components, id];
  };

  static removeElement = (id: string): void => {
    const filteredComponents: string[] = this.components.filter(
      (cId: string) => cId !== id
    );

    this.components = filteredComponents;
  };

  static getFocusedElementId = (): string | null => {
    return this.components.length
      ? this.components[this.components.length - 1]
      : null;
  };
}

export { ShortcutsHelper };
