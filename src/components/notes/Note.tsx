import { useCallback, useContext } from "react";

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
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

const Note = ({ note }: { note: INote }) => {
  const {
    notes,
    archiveNotes,
    deleteNotes,
    setNotes,
    setAcrchiveNotes,
    setDeleteNotes,
  } = useContext(KeepContext);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const archiveNote = useCallback(
    (note: INote) => {
      const updatedNotes = notes.filter((data) => data.id !== note.id);
      setNotes(updatedNotes);
      setAcrchiveNotes((prevArr: INote[]) => [note, ...prevArr]);

      enqueueSnackbar("Заметка добавлена в архив", {
        action: (key) => (
          <Button
            onClick={() => {
              const updatedAcrchive = archiveNotes.filter(
                (data) => data.id !== note.id
              );
              setNotes((prevArr: INote[]) => [note, ...prevArr]);
              setAcrchiveNotes(updatedAcrchive);

              closeSnackbar(key);
            }}
          >
            Отменить
          </Button>
        ),
      });
    },
    [enqueueSnackbar, closeSnackbar, setNotes, setAcrchiveNotes, notes]
  );
  const deleteNote = useCallback(
    (note: INote) => {
      const updatedNotes = notes.filter((data) => data.id !== note.id);
      setNotes(updatedNotes);
      setDeleteNotes((prevArr: INote[]) => [note, ...prevArr]);

      enqueueSnackbar("Заметка перемещена в корзину", {
        action: (key) => (
          <Button
            onClick={() => {
              const updatedDelete = deleteNotes.filter(
                (data) => data.id !== note.id
              );
              setNotes((prevArr: INote[]) => [note, ...prevArr]);
              setDeleteNotes(updatedDelete);

              closeSnackbar(key);
            }}
          >
            Отменить
          </Button>
        ),
      });
    },
    [enqueueSnackbar, closeSnackbar, setNotes, setAcrchiveNotes, notes]
  );

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
          onClick={() => archiveNote(note)}
        />
        <Delete
          fontSize="medium"
          onClick={() => deleteNote(note)}
          style={{ color: "#fff", cursor: "pointer" }}
        />
      </CardActions>
    </StyledCard>
  );
};

export default Note;
