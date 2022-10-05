import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Searcher from "./SearchBox";

type IMenu = {
  handleDrawer: () => void;
}

const Header = styled(AppBar)({
  backgroundColor: "#202124",
  height: "80px",
});

export default function Menu({ handleDrawer }: IMenu) {
  const logo =
    "https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header>
        <Toolbar sx={{ my: "auto" }}>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: "8px" }}
              onClick={handleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <img src={logo} alt="logo" style={{ width: 30 }} />
          <Typography
            sx={{
              m: 2,
              fontFamily: "Product Sans, Arial, sans-serif",
              fontSize: "22px",
              mr: 13,
            }}
          >
            Keep
          </Typography>
          <Searcher />
        </Toolbar>
      </Header>
    </Box>
  );
}
