import { createContext, ReactElement, ReactNode, useState } from "react";

export interface IComponentContext {
  addElement: (id: string) => void;
  removeElement: (id: string) => void;
  getTopElementId: () => string | null;
}

interface IActivityProviderProps {
  children: ReactNode;
}

const ComponentContext = createContext<IComponentContext>(null!);

function ComponentProvider({ children }: IActivityProviderProps): ReactElement {
  const [components, setComponents] = useState<string[]>([]);

  const addElement = (id: string): void => {
    setComponents([...components, id]);
  };

  const removeElement = (id: string): void => {
    const filteredComponents: string[] = components.filter(
      (cId: string) => cId !== id
    );

    setComponents(filteredComponents);
  };

  const getTopElementId = (): string | null => {
    return components.length ? components[components.length - 1] : null;
  };

  return (
    <ComponentContext.Provider
      value={{
        addElement,
        removeElement,
        getTopElementId,
      }}
    >
      {children}
    </ComponentContext.Provider>
  );
}

export { ComponentContext, ComponentProvider };
