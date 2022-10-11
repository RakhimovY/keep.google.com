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
  UnarchiveOutlined as Unarchive,
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

const ArchiveNote = ({ archive }: { archive: INote }) => {
  const { archiveNotes, setNotes, setAcrchiveNotes, setDeleteNotes } =
    useContext(KeepContext);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const unArchiveNote = (archive: INote) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== archive.id);
    setAcrchiveNotes(updatedNotes);
    setNotes((prevArr) => [archive, ...prevArr]);

    enqueueSnackbar("Заметка возвращена из архива", {
      action: (key) => (
        <Button
          onClick={() => {
            const unArchiveNote = archiveNotes.filter(
              (data) => data.id !== archive.id
            );
            setAcrchiveNotes((prevArr) => [archive, ...prevArr]);
            setNotes(unArchiveNote);

            closeSnackbar(key);
          }}
        >
          Отменить
        </Button>
      ),
    });
  };

  const deleteNote = (archive: INote) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== archive.id);
    setAcrchiveNotes(updatedNotes);
    setDeleteNotes((prevArr) => [archive, ...prevArr]);

    enqueueSnackbar("Заметка добавлена в корзину", {
      action: (key) => (
        <Button
          onClick={() => {
            const deleteNote = archiveNotes.filter(
              (data) => data.id !== archive.id
            );
            setAcrchiveNotes((prevArr) => [archive, ...prevArr]);
            setDeleteNotes(deleteNote);

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
        <Typography color={"white"}>{archive.heading}</Typography>
        <Typography color={"white"}>{archive.text}</Typography>
      </CardContent>
      <CardActions>
        <Unarchive
          fontSize="medium"
          style={{ marginLeft: "auto", color: "#fff", cursor: "pointer" }}
          onClick={() => unArchiveNote(archive)}
        />
        <Delete
          fontSize="medium"
          onClick={() => deleteNote(archive)}
          style={{ color: "#fff", cursor: "pointer" }}
        />
      </CardActions>
    </StyledCard>
  );
};

export default ArchiveNote;
