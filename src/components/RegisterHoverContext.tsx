import { createContext, useContext, useState, type ReactNode } from 'react';

type Ctx = {
  registerHovered: boolean;
  setRegisterHovered: (v: boolean) => void;
};

const RegisterHoverContext = createContext<Ctx>({
  registerHovered: false,
  setRegisterHovered: () => {},
});

export function RegisterHoverProvider({ children }: { children: ReactNode }) {
  const [registerHovered, setRegisterHovered] = useState(false);
  return (
    <RegisterHoverContext.Provider value={{ registerHovered, setRegisterHovered }}>
      {children}
    </RegisterHoverContext.Provider>
  );
}

export function useRegisterHover() {
  return useContext(RegisterHoverContext);
}
