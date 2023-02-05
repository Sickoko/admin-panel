import Form from "../Components/addUser";
import Box from "@mui/material/Box";
import Header from "../Components/Header";
import Side from "../Components/side";
import Direction from "../Components/Direction";
import Container from "@mui/material/Container";
import { Routes, Route, Link } from "react-router-dom";
import AddUser from "../Components/addUser";
export default function AddUsers() {
  return (
    <Box>
      <Header />
      <div className="side">
        <Side />
        <Container maxWidth="false">
          <Direction />
          <AddUser />
        </Container>
      </div>
    </Box>
  );
}
