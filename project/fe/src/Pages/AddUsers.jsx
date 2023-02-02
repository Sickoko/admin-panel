import Form from "../Components/Form";
import Box from "@mui/material/Box";
import Header from "../Components/Header";
import Side from "../Components/side";
import Direction from "../Components/Direction";
import Container from "@mui/material/Container";
import { Routes, Route, Link } from "react-router-dom";
export default function AddUsers() {
  return (
    <Box>
      <Header />

      <div className="side">
        <Side />
        <Container maxWidth="false">
          <Direction />
          <Form />
        </Container>
      </div>
    </Box>
  );
}
