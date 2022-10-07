import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IState {
  notes: string[];
  setNotes: Dispatch<SetStateAction<never[]>>;
  archiveNotes: string[];
  setAcrchiveNotes: Dispatch<SetStateAction<never[]>>;
  deleteNotes: string[];
  setDeleteNotes: Dispatch<SetStateAction<never[]>>;
}

export const KeepContext = createContext<IState | null>(null);

const KeepProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setAcrchiveNotes] = useState([]);
  const [deleteNotes, setDeleteNotes] = useState([]);

  return (
    <KeepContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setAcrchiveNotes,
        deleteNotes,
        setDeleteNotes,
      }}
    >
      {children}
    </KeepContext.Provider>
  );
};

export default KeepProvider;
