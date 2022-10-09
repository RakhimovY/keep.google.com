import { createContext, Dispatch, SetStateAction, useState } from "react";
import { INode } from "../interfaces/interfaces";
interface IState {
  notes?: INode[] | [];
  setNotes?: Dispatch<SetStateAction<INode[] | []>>;
}

export const KeepContext = createContext<any>(null);

const KeepProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<INode[] | []>([]);

  return (
    <KeepContext.Provider
      value={{
        notes,
        setNotes,
      }}
    >
      {children}
    </KeepContext.Provider>
  );
};

export default KeepProvider;
