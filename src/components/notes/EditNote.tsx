import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Zoom,
} from "@mui/material";

import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import { KeepContext } from "../../context/KeepProvider";
import { INote } from "../../interfaces/interfaces";

import { TransitionProps } from "@mui/material/transitions";
import React, { FC, useCallback, useContext } from "react";
import { useSnackbar } from "notistack";
import { Box } from "@mui/system";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Zoom
      style={{ transitionDelay: "50ms" }}
      timeout={1000}
      in
      ref={ref}
      {...props}
    />
  );
});

interface Props {
  show: boolean;
  note: INote | undefined;
  handleCancel: () => void;
}

const EditNote: FC<Props> = ({ show, note, handleCancel }) => {
  const {
    notes,
    archiveNotes,
    deleteNotes,
    setNotes,
    setAcrchiveNotes,
    setDeleteNotes,
  } = useContext(KeepContext);

  const initialNote = {
    id: "",
    text: "",
    heading: "",
  };

  console.log(note);

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
    [enqueueSnackbar, closeSnackbar, setNotes, setAcrchiveNotes, archiveNotes]
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
    [enqueueSnackbar, closeSnackbar, setNotes, setDeleteNotes, deleteNotes]
  );
  return (
    <Dialog
      open={show}
      TransitionComponent={Transition}
      onClose={handleCancel}
      maxWidth="sm"
      fullWidth
    >
      <Box
        sx={{
          backgroundColor: "#202124",
          color: "white",
        }}
      >
        <DialogContent dividers>
          <TextField
            InputProps={{ disableUnderline: true }}
            value={note?.heading}
            // onChange={}
            multiline
            autoFocus
            fullWidth
            inputProps={{ style: { color: "white" } }}
            variant="standard"
          />

          <TextField
            InputProps={{ disableUnderline: true }}
            value={note?.text}
            // onChange={}
            multiline
            autoFocus
            fullWidth
            inputProps={{ style: { color: "white" } }}
            variant="standard"
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "flex-start" }}>
          <Archive
            fontSize="medium"
            style={{ marginLeft: "auto", color: "#fff", cursor: "pointer" }}
            onClick={() => archiveNote(note ?? initialNote)}
          />
          <Delete
            fontSize="medium"
            onClick={() => deleteNote(note ?? initialNote)}
            style={{ color: "#fff", cursor: "pointer" }}
          />
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default EditNote;
