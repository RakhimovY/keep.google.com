import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

interface Props {
  open: boolean;
  onRemove: () => void;
  onCancel: () => void;
}

const DelConfirm: React.FC<Props> = ({ open, onRemove, onCancel }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onCancel}
        aria-labelledby="responsive-dialog-title"
        sx={{ borderRadius: "30px" }}
      >
        <Box
          sx={{
            backgroundColor: "#202124",
            color: "white",
          }}
        >
          <DialogTitle id="responsive-dialog-title">
            Удалить заметку навсегда?
          </DialogTitle>
          <DialogActions>
            <Button autoFocus onClick={onCancel} sx={{ color: "white" }}>
              Отмена
            </Button>
            <Button onClick={onRemove} autoFocus>
              Удалить
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default DelConfirm;
