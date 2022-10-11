import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

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
      >
        <DialogTitle id="responsive-dialog-title">
          Удалить заметку навсегда?
        </DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={onCancel}>
            Отмена
          </Button>
          <Button onClick={onRemove} autoFocus>
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DelConfirm;
