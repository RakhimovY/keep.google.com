import { useContext, useMemo, useRef, useState } from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

import { KeepContext } from "../../context/KeepProvider";
import { INote } from "../../interfaces/interfaces";

import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";
import EditNote from "./EditNote";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes, setNotes, search } = useContext(KeepContext);

  const reorder = (list: INote[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = reorder(notes, result.source.index, result.destination.index);
    setNotes(items);
  };

  const notesList = useMemo(() => {
    return notes.filter(
      (notes) =>
        search === "" ||
        notes.heading.toLowerCase().includes(search.toLowerCase()) ||
        notes.text.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, notes]);

  const currentNoteRef = useRef<INote>();

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = (note: INote) => {
    currentNoteRef.current = note;
    setOpenDialog(true);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable-1">
              {(provided, snapshot) => (
                <Grid
                  container
                  style={{ marginTop: 16 }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {provided.placeholder}
                  <EditNote
                    show={openDialog}
                    note={currentNoteRef.current}
                    handleCancel={() => setOpenDialog(false)}
                  />
                  {notesList.map((note, index) => (
                    <Draggable
                      key={note.id}
                      draggableId={note.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Grid
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={index}
                        >
                          <Note
                            note={note}
                            key={index}
                            handleOpenDialog={handleOpenDialog}
                          />
                        </Grid>
                      )}
                    </Draggable>
                  ))}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
