import { createContext, Dispatch, SetStateAction, useState } from "react";
import { INote } from "../interfaces/interfaces";
interface IState {
  notes: INote[] | [];
  setNotes: Dispatch<SetStateAction<INote[] | []>>;
  archiveNotes: INote[] | [];
  setAcrchiveNotes: Dispatch<SetStateAction<INote[] | []>>;
  deleteNotes: INote[] | [];
  setDeleteNotes: Dispatch<SetStateAction<INote[] | []>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  place: string;
  setPlace: Dispatch<SetStateAction<string>>;
}

export const KeepContext = createContext<IState>({} as IState);

const KeepProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<INote[] | []>([]);
  const [archiveNotes, setAcrchiveNotes] = useState<INote[] | []>([]);
  const [deleteNotes, setDeleteNotes] = useState<INote[] | []>([]);
  const [search, setSearch] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  return (
    <KeepContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setAcrchiveNotes,
        deleteNotes,
        setDeleteNotes,
        search,
        setSearch,
        place,
        setPlace,
      }}
    >
      {children}
    </KeepContext.Provider>
  );
};

export default KeepProvider;
