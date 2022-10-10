import { useContext } from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { KeepContext } from "../../context/KeepProvider";

import ArchiveNote from "./ArchiveNote";
import EmptyArchives from "./EmptyArchives";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const ArchiveNotes = () => {
  const { archiveNotes } = useContext(KeepContext);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {archiveNotes.length > 0 ? (
          <Grid container>
            {archiveNotes.map((archive, index) => (
              <Grid item key={index}>
                <ArchiveNote archive={archive} key={index} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyArchives />
        )}
      </Box>
    </Box>
  );
};

export default ArchiveNotes;
