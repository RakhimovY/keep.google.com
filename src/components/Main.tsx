import React from "react";
import SwipeDrawer from "./SwipeDrawer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import EmptyNotes from "./notes/EmptyNotes";
import Form from "./notes/Form";
// import Archives from "./archive/Archives";
// import DeleteNotes from "./delete/DeleteNotes";

export default function Main() {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <SwipeDrawer />
        <Routes>
          <Route path="/" element={<EmptyNotes />} />
          <Route path="/notification" element={<EmptyNotes />} />
          <Route path="/archive" element={<EmptyNotes />} />
          <Route path="/delete" element={<EmptyNotes />} />
        </Routes>
      </Router>
    </Box>
  );
}
