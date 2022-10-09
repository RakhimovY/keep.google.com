import { LightbulbOutlined as Lightbulb } from "@mui/icons-material";
import { Typography, Box, styled } from "@mui/material";

const Light = styled(Lightbulb)(() => ({
  fontSize: "120px",
  color: "#e8eaed",
  padding: "20px",
}));

const Text = styled(Typography)(() => ({
  color: "#9aa0a6",
  lineHeight: "1.75rem",
  fontFamily: "Roboto, Arial, sans-serif",
  fontSize: "1.375rem",
  fontWeight: "400",
  letterSpacing: "0",
}));

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20vh",
  width: "100%",
}));

const EmptyNotes = () => {
  return (
    <Container>
      <Light />
      <Text>Здесь будут ваши заметки.</Text>
    </Container>
  );
};

export default EmptyNotes;
