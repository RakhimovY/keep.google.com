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
import React, { FC, useCallback, useContext, useEffect, useState } from "react";
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

  const [changeNote, setChangeNote] = useState(initialNote);

  useEffect(() => {
    if (note) setChangeNote(note);
  }, [note]);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const archiveNote = useCallback(
    (changeNote: INote) => {
      const updatedNotes = notes.filter((data) => data.id !== changeNote.id);
      setNotes(updatedNotes);
      setAcrchiveNotes((prevArr: INote[]) => [changeNote, ...prevArr]);
      handleCancel();

      enqueueSnackbar("Заметка добавлена в архив", {
        action: (key) => (
          <Button
            onClick={() => {
              const updatedAcrchive = archiveNotes.filter(
                (data) => data.id !== changeNote.id
              );
              setNotes((prevArr: INote[]) => [changeNote, ...prevArr]);
              setAcrchiveNotes(updatedAcrchive);

              closeSnackbar(key);
            }}
          >
            Отменить
          </Button>
        ),
      });
    },
    [
      notes,
      enqueueSnackbar,
      closeSnackbar,
      setNotes,
      setAcrchiveNotes,
      handleCancel,
      archiveNotes,
    ]
  );
  const deleteNote = useCallback(
    (changeNote: INote) => {
      const updatedNotes = notes.filter((data) => data.id !== changeNote.id);
      setNotes(updatedNotes);
      setDeleteNotes((prevArr: INote[]) => [changeNote, ...prevArr]);
      handleCancel();

      enqueueSnackbar("Заметка перемещена в корзину", {
        action: (key) => (
          <Button
            onClick={() => {
              const updatedDelete = deleteNotes.filter(
                (data) => data.id !== changeNote.id
              );
              setNotes((prevArr: INote[]) => [changeNote, ...prevArr]);
              setDeleteNotes(updatedDelete);

              closeSnackbar(key);
            }}
          >
            Отменить
          </Button>
        ),
      });
    },
    [
      notes,
      enqueueSnackbar,
      closeSnackbar,
      setNotes,
      setDeleteNotes,
      handleCancel,
      deleteNotes,
    ]
  );
  const handleHeading = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeNote((prevState) => ({ ...prevState, heading: e.target.value }));
    const noteIndex = notes.findIndex((index) => index.id === changeNote.id);
    const changedNotes = [
      ...notes.slice(0, noteIndex),
      changeNote,
      ...notes.slice(noteIndex + 1),
    ];
    setNotes(changedNotes);
  };

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeNote((prevState) => ({ ...prevState, text: e.target.value }));
    const noteIndex = notes.findIndex((index) => index.id === changeNote.id);
    const changedNotes = [
      ...notes.slice(0, noteIndex),
      changeNote,
      ...notes.slice(noteIndex + 1),
    ];
    setNotes(changedNotes);
  };

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
          color: "#202124",
        }}
      >
        <DialogContent dividers>
          <TextField
            InputProps={{ disableUnderline: true }}
            value={changeNote?.heading}
            onChange={handleHeading}
            multiline
            autoFocus
            fullWidth
            inputProps={{ style: { color: "white" } }}
            variant="standard"
          />

          <TextField
            InputProps={{ disableUnderline: true }}
            value={changeNote?.text}
            onChange={handleText}
            multiline
            autoFocus
            fullWidth
            inputProps={{ style: { color: "white" } }}
            variant="standard"
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "flex-start" }}>
          <Archive
            fontSize="large"
            style={{ marginLeft: "auto", color: "#fff", cursor: "pointer" }}
            onClick={() => archiveNote(changeNote)}
          />
          <Delete
            fontSize="large"
            onClick={() => deleteNote(changeNote)}
            style={{ color: "#fff", cursor: "pointer" }}
          />
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default EditNote;
