import React, { createContext, useState } from 'react';

export type Result = {
  foodType: string;
  estimatedWeight: number;
  estimatedCalories: number;
};

type ContextProps = {
  result: Result | null;
  setResult: (r: Result | null) => void;
};

export const AppContext = createContext<ContextProps>({
  result: null,
  setResult: () => {},
});

export const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [result, setResult] = useState<Result | null>(null);
  return (
    <AppContext.Provider value={{ result, setResult }}>
      {children}
    </AppContext.Provider>
  );
};
