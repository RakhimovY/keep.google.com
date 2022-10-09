import { useContext } from "react";

import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  UnarchiveOutlined as Unarchive,
  DeleteOutlineOutlined as Delete,
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

const Archive = ({ archive }: { archive: INote }) => {
  const { archiveNotes, setNotes, setAcrchiveNotes, setDeleteNotes } =
    useContext(KeepContext);

  const unArchiveNote = (archive: INote) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== archive.id);
    setAcrchiveNotes(updatedNotes);
    setNotes((prevArr) => [archive, ...prevArr]);
  };

  const deleteNote = (archive: INote) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== archive.id);
    setAcrchiveNotes(updatedNotes);
    setDeleteNotes((prevArr) => [archive, ...prevArr]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography color={"white"}>{archive.heading}</Typography>
        <Typography color={"white"}>{archive.text}</Typography>
      </CardContent>
      <CardActions>
        <Unarchive
          fontSize="medium"
          style={{ marginLeft: "auto", color: "#fff" }}
          onClick={() => unArchiveNote(archive)}
        />
        <Delete
          fontSize="medium"
          onClick={() => deleteNote(archive)}
          style={{ color: "#fff" }}
        />
      </CardActions>
    </StyledCard>
  );
};

export default Archive;
