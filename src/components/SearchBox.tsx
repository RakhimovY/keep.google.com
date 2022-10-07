import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";

const Search = styled("div", {
  shouldForwardProp: (prop) => prop !== "openInput",
})(({ theme, openInput }: any) => ({
  position: "relative",
  display: "flex",
  borderRadius: "8px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    display: openInput ? "flex" : "none",
  },
}));

const SmallScreenSearch = styled(SearchIcon)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const SearchIconWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "openInput",
})(({ theme, openInput }: any) => ({
  padding: theme.spacing(0, 0, 0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    display: openInput ? "flex" : "none",
  },
}));

const StyledInputBase = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== "openInput",
})(({ theme, openInput }: any) => ({
  color: "inherit",
  display: "flex",
  padding: theme.spacing(1, 1.5, 1, 1.5),
  "& .MuiInputBase-input": {
    font: "18px/30px Roboto, Arial, sans-serif",
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
  [theme.breakpoints.down("sm")]: {
    display: openInput ? "flex" : "none",
  },
  width: "100%",
}));

export default function SearchBox() {
  const [openInput, setOpenInput] = React.useState(false);
  return (
    <>
      <Box sx={{ width: "40%" }}>
        <Search>
          <SearchIconWrapper openInput={openInput}>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Поиск"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
      <SmallScreenSearch onClick={() => setOpenInput(true)} />
    </>
  );
}
