import { createContext, Dispatch, SetStateAction, useState } from "react";
import { INote } from "../interfaces/interfaces";
interface IState {
  notes: INote[] | [];
  setNotes: Dispatch<SetStateAction<INote[] | []>>;
  archiveNotes: INote[] | [];
  setAcrchiveNotes: Dispatch<SetStateAction<INote[] | []>>;
  deleteNotes: INote[] | [];
  setDeleteNotes: Dispatch<SetStateAction<INote[] | []>>;
}

export const KeepContext = createContext<IState>({} as IState);

const KeepProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<INote[] | []>([]);
  const [archiveNotes, setAcrchiveNotes] = useState<INote[] | []>([]);
  const [deleteNotes, setDeleteNotes] = useState<INote[] | []>([]);

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
