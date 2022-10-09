import { DeleteOutlined as Delete } from "@mui/icons-material";
import { Typography, Box, styled } from "@mui/material";

const DeleteIcon = styled(Delete)(() => ({
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

const EmptyDelete = () => {
  return (
    <Container>
      <DeleteIcon />
      <Text>В корзине ничего нет.</Text>
    </Container>
  );
};

export default EmptyDelete;
