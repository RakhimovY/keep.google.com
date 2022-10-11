import { Key, useContext, useRef, useState } from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { KeepContext } from "../../context/KeepProvider";

import DeleteNote from "./DeleteNote";
import EmptyDelete from "./EmptyDelete";
import { INote } from "../../interfaces/interfaces";
import DelConfirm from "./DelConfirm";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deleteNotes, setDeleteNotes } = useContext(KeepContext);
  const [openDelConfirm, setOpenDelConfirm] = useState(false);
  const currentContactRef = useRef<INote[]>();

  const handleRemove = () => {
    setOpenDelConfirm(false);
    if (currentContactRef.current) setDeleteNotes(currentContactRef.current);
  };

  const closeDelConfirm = () => setOpenDelConfirm(false);

  const onRemove = (deleteNote: INote) => {
    setOpenDelConfirm(true);
    currentContactRef.current = deleteNotes.filter(
      (data) => data.id !== deleteNote.id
    );
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {deleteNotes.length > 0 ? (
          <Grid container>
            {deleteNotes.map(
              (deleteNote: INote, index: Key | null | undefined) => (
                <Grid item key={index}>
                  <DeleteNote
                    deleteNote={deleteNote}
                    key={index}
                    handleRemove={onRemove}
                  />
                </Grid>
              )
            )}
          </Grid>
        ) : (
          <EmptyDelete />
        )}
      </Box>
      <DelConfirm
        open={openDelConfirm}
        onRemove={handleRemove}
        onCancel={closeDelConfirm}
      />
    </Box>
  );
};

export default DeleteNotes;
