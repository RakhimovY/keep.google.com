import { useContext } from "react";

import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";

import { KeepContext } from "../../context/KeepProvider";
import { INote } from "../../interfaces/interfaces";

const StyledCard = styled(Card)`
  background-color: #282c34;
  border: 3px solid white;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
  box-shadow: none;
`;

const Note = ({ note }: { note: INote }) => {
  const { notes, setNotes, setAcrchiveNotes, setDeleteNotes } =
    useContext(KeepContext);

  const archiveNote = (note: INote) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setAcrchiveNotes((prevArr: INote[]) => [note, ...prevArr]);
  };

  const deleteNote = (note: INote) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeleteNotes((prevArr: INote[]) => [note, ...prevArr]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography color={"white"}>{note.heading}</Typography>
        <Typography color={"white"}>{note.text}</Typography>
        <CardActions>
          <Archive
            fontSize="medium"
            style={{ marginLeft: "auto" }}
            onClick={() => archiveNote(note)}
          />
          <Delete fontSize="medium" onClick={() => deleteNote(note)} />
        </CardActions>
      </CardContent>
    </StyledCard>
  );
};

export default Note;
