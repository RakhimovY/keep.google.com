import { Key, useContext } from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { KeepContext } from "../../context/KeepProvider";

import DeleteNote from "./DeleteNote";
import EmptyDelete from "./EmptyDelete";
import { INote } from "../../interfaces/interfaces";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deleteNotes } = useContext(KeepContext);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {deleteNotes.length > 0 ? (
          <Grid container>
            {deleteNotes.map(
              (deleteNote: INote, index: Key | null | undefined) => (
                <Grid item key={index}>
                  <DeleteNote deleteNote={deleteNote} key={index} />
                </Grid>
              )
            )}
          </Grid>
        ) : (
          <EmptyDelete />
        )}
      </Box>
    </Box>
  );
};

export default DeleteNotes;
