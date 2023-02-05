import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import AddProduct from "../Components/addProduct";
import Header from "../Components/Header";
import Side from "../Components/side";
import { Container } from "@mui/material";

export default function Product() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <Box>
      <Header />
      <div className="side">
        <Side />
        <Container maxWidth="false">
          <AddProduct />
        </Container>
      </div>
    </Box>
  );
}
