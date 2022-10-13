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
  deleteAll: boolean;
  onRemove: () => void;
  onCancel: () => void;
}

const DelConfirm: React.FC<Props> = ({
  open,
  deleteAll,
  onRemove,
  onCancel,
}) => {
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
        <Box
          sx={{
            backgroundColor: "#313235",
            color: "white",
          }}
        >
          <DialogTitle
            id="responsive-dialog-title"
            sx={{
              letterSpacing: ".01428571em",
              fontFamily: "Roboto,Arial,sans-serif",
              fontSize: ".875rem",
              fontWeight: "400",
              lineHeight: "1.25rem",
              color: "#e8eaed",
              paddingBottom: "24px",
              wordWrap: "break-word",
            }}
          >
            {deleteAll
              ? "Очистить корзину? Заметки будут удалены навсегда."
              : "Удалить заметку навсегда?"}
          </DialogTitle>
          <DialogActions>
            <Button autoFocus onClick={onCancel} sx={{ color: "white" }}>
              Отмена
            </Button>
            <Button onClick={onRemove} autoFocus>
              {deleteAll ? "Очистить" : "Удалить"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default DelConfirm;
