import Form from "../Components/Form";
import Box from "@mui/material/Box";
import Header from "../Components/Header";
import Side from "../Components/side";
export default function AddUsers() {
  return (
    <Box>
      <Header />
      <div className="side">
        <Side />
        <Form />
      </div>
    </Box>
  );
}
