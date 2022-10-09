import { ArchiveOutlined as Archive } from "@mui/icons-material";
import { Typography, Box, styled } from "@mui/material";

const ArchiveIcon = styled(Archive)(() => ({
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

const EmptyArchives = () => {
  return (
    <Container>
      <ArchiveIcon />
      <Text>Здесь будут храниться архивированные заметки.</Text>
    </Container>
  );
};

export default EmptyArchives;
