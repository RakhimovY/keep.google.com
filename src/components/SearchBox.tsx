import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  borderRadius: "8px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  display: "flex",
  padding: theme.spacing(1.5, 1.5, 1.5, 1.5),
  "& .MuiInputBase-input": {
    font: "18px/30px Roboto, Arial, sans-serif",
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
}));

export default function SearchBox() {
  return (
    <Box sx={{ width: "40%" }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Поиск"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
}
