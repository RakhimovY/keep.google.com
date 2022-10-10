import { useContext, useEffect } from "react";

import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";

import { KeepContext } from "../../context/KeepProvider";
import { INote } from "../../interfaces/interfaces";
import NoteSnackbar from "./NoteSnackbar";

const StyledCard = styled(Card)(() => ({
  backgroundColor: "#202124",
  border: "1px solid white",
  borderRadius: "8px",
  width: "240px",
  margin: "8px",
  boxShadow: "none",
}));

const Note = ({ note }: { note: INote }) => {
  const { notes, setNotes, setAcrchiveNotes, setDeleteNotes, setPlace } =
    useContext(KeepContext);

  const archiveNote = (note: INote, title: string) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setAcrchiveNotes((prevArr: INote[]) => [note, ...prevArr]);
    setPlace(title);
  };

  const deleteNote = (note: INote, title: string) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeleteNotes((prevArr: INote[]) => [note, ...prevArr]);
    setPlace(title);
  };
  useEffect(() => console.log("mount"), []);
  return (
    <StyledCard>
      <CardContent>
        <Typography color={"white"}>{note.heading}</Typography>
        <Typography color={"white"}>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Archive
          fontSize="medium"
          style={{ marginLeft: "auto", color: "#fff", cursor: "pointer" }}
          onClick={() => archiveNote(note, "архив")}
        />
        <Delete
          fontSize="medium"
          onClick={() => deleteNote(note, "корзину")}
          style={{ color: "#fff", cursor: "pointer" }}
        />
      </CardActions>
      <NoteSnackbar />
    </StyledCard>
  );
};

export default Note;
