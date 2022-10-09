import { useContext } from "react";

import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from "@mui/icons-material";
import { KeepContext } from "../../context/KeepProvider";
import { INote } from "../../interfaces/interfaces";

const StyledCard = styled(Card)(() => ({
  backgroundColor: "#282c34",
  border: "1px solid white",
  borderRadius: "8px",
  width: "240px",
  margin: "8px",
  boxShadow: "none",
}));

const DeleteNote = ({ deleteNote }: { deleteNote: INote }) => {
  const { deleteNotes, setNotes, setDeleteNotes } = useContext(KeepContext);

  const restoreNote = (deleteNote: INote) => {
    const updatedNotes = deleteNotes.filter(
      (data) => data.id !== deleteNote.id
    );
    setDeleteNotes(updatedNotes);
    setNotes((prevArr) => [deleteNote, ...prevArr]);
  };

  const removeNote = (deleteNote: INote) => {
    const updatedNotes = deleteNotes.filter(
      (data) => data.id !== deleteNote.id
    );
    setDeleteNotes(updatedNotes);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography color={"white"}>{deleteNote.heading}</Typography>
        <Typography color={"white"}>{deleteNote.text}</Typography>
      </CardContent>
      <CardActions>
        <Delete
          fontSize="medium"
          style={{ marginLeft: "auto", color: "#fff" }}
          onClick={() => removeNote(deleteNote)}
        />
        <Restore
          fontSize="medium"
          onClick={() => restoreNote(deleteNote)}
          style={{ color: "#fff" }}
        />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
