import { LightbulbOutlined as Lightbulb } from "@mui/icons-material";
import { Typography, Box, styled } from "@mui/material";

const Light = styled(Lightbulb)`
  font-size: 120px;
  color: #e8eaed;
  padding: 20px;
`;

const Text = styled(Typography)`
  color: #9aa0a6;
  line-height: 1.75rem;
  font-family: Roboto, Arial, sans-serif;
  font-size: 1.375rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.75rem;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40vh;
  width: 100%;
`;

const EmptyNotes = () => {
  return (
    <Container>
      <Light />
      <Text>Здесь будут ваши заметки.</Text>
    </Container>
  );
};

export default EmptyNotes;
