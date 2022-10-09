import { useState, useRef, useContext } from "react";

import { Box, TextField, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuid } from "uuid";

import { KeepContext } from "../../context/KeepProvider";

import { INode } from "../../interfaces/interfaces";

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  boxShadow:
    "0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
  border: "solid #fff 0.1px",
  width: "600px",
  borderRadius: "8px",
  minHeight: "30px",
  padding: "10px 15px",
}));

const note = {
  id: "",
  heading: "",
  text: "",
};

const Form = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });

  const { setNotes } = useContext(KeepContext);
  console.log(addNote, setAddNote);

  const containerRef = useRef<HTMLElement>();

  const handleClickAway = () => {
    setShowTextField(false);
    if (containerRef.current) containerRef.current.style.minHeight = "30px";
    setAddNote({ ...note, id: uuid() });

    if (addNote.heading || addNote.text) {
      setNotes((prevArr: INode[]) => [addNote, ...prevArr]);
    }
  };

  const onTextAreaClick = () => {
    setShowTextField(true);
    if (containerRef.current) containerRef.current.style.minHeight = "70px";
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changedNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(changedNote);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            placeholder="Введите заголовок"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange={onTextChange}
            name="heading"
            value={addNote.heading}
          />
        )}
        <TextField
          placeholder="Заметка..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
          onChange={onTextChange}
          name="text"
          value={addNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
