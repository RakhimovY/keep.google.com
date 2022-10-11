import { useContext } from "react";

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from "@mui/icons-material";
import { useSnackbar } from "notistack";

import { KeepContext } from "../../context/KeepProvider";
import { INote } from "../../interfaces/interfaces";

const StyledCard = styled(Card)(() => ({
  backgroundColor: "#202124",
  border: "1px solid white",
  borderRadius: "8px",
  width: "240px",
  margin: "8px",
  boxShadow: "none",
}));

interface Props {
  deleteNote: INote;
  handleRemove: (contact: INote) => void;
}

const DeleteNote: React.FC<Props> = ({ deleteNote, handleRemove }) => {
  const { deleteNotes, setNotes, setDeleteNotes } = useContext(KeepContext);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const restoreNote = (deleteNote: INote) => {
    const updatedNotes = deleteNotes.filter(
      (data) => data.id !== deleteNote.id
    );
    setDeleteNotes(updatedNotes);
    setNotes((prevArr) => [deleteNote, ...prevArr]);

    enqueueSnackbar("Заметка восстановлена", {
      action: (key) => (
        <Button
          onClick={() => {
            const restoreNote = deleteNotes.filter(
              (data) => data.id !== deleteNote.id
            );
            setDeleteNotes((prevArr) => [deleteNote, ...prevArr]);
            setNotes(restoreNote);

            closeSnackbar(key);
          }}
        >
          Отменить
        </Button>
      ),
    });
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
          style={{ marginLeft: "auto", color: "#fff", cursor: "pointer" }}
          onClick={() => handleRemove(deleteNote)}
        />
        <Restore
          fontSize="medium"
          onClick={() => restoreNote(deleteNote)}
          style={{ color: "#fff", cursor: "pointer" }}
        />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
