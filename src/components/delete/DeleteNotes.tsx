import { Key, useContext, useRef, useState } from "react";

import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { KeepContext } from "../../context/KeepProvider";

import DeleteNote from "./DeleteNote";
import EmptyDelete from "./EmptyDelete";
import { INote } from "../../interfaces/interfaces";
import DelConfirm from "./DelConfirm";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
const Text = styled(Typography)(() => ({
  color: "#e8eaed",
  lineHeight: "1.75rem",
  fontFamily: "Roboto, Arial, sans-serif",
  fontWeight: "400",
  fontSize: "17px",
  letterSpacing: "0",
}));

const DeletAllButton = styled(Button)(() => ({
  color: "#8ab4f8",
  fontSize: ".875rem",
  fontWeight: "500",
  lineHeight: "1.25rem",
  height: "36px",
  marginLeft: "16px",
  borderRadius: "4px",
}));

const DeletAllBox = styled(Box)(() => ({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  paddingTop: "24px",
  paddingBottom: "8px",
}));

const DeleteNotes = () => {
  const { deleteNotes, setDeleteNotes } = useContext(KeepContext);
  const [openDelConfirm, setOpenDelConfirm] = useState(false);
  const [deleteAll, setDeleteAll] = useState(false);
  const currentNoteRef = useRef<INote[]>();

  const handleRemove = () => {
    if (deleteAll) {
      setOpenDelConfirm(false);
      setDeleteNotes([]);
      setDeleteAll(false);
    } else {
      setOpenDelConfirm(false);
      if (currentNoteRef.current) setDeleteNotes(currentNoteRef.current);
      setDeleteAll(false);
    }
  };

  console.log(deleteAll);

  const closeDelConfirm = () => {
    setOpenDelConfirm(false);
    setDeleteAll(false);
  };

  const onRemove = (deleteNote: INote) => {
    setOpenDelConfirm(true);
    currentNoteRef.current = deleteNotes.filter(
      (data) => data.id !== deleteNote.id
    );
  };

  const handleDeletAll = () => {
    setOpenDelConfirm(true);
    setDeleteAll(true);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {deleteNotes.length > 0 ? (
          <>
            <DeletAllBox>
              <Text>Заметки удаляются из корзины через 7 дней.</Text>
              <DeletAllButton onClick={handleDeletAll}>
                Очистить корзину
              </DeletAllButton>
            </DeletAllBox>
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
          </>
        ) : (
          <EmptyDelete />
        )}
      </Box>
      <DelConfirm
        open={openDelConfirm}
        deleteAll={deleteAll}
        onRemove={handleRemove}
        onCancel={closeDelConfirm}
      />
    </Box>
  );
};

export default DeleteNotes;
