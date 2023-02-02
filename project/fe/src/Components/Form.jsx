import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { fontSize, width } from "@mui/system";
import About from "./about";
export default function Form() {
  return (
    <Box>
      <Box
        component="form"
        className="Form"
        sx={{
          "& > :not(style)": { ml: 3, mb: 3, mr: 3, display: "flex" },
          backgroundColor: "white",
          width: "100%",

          borderRadius: 1,
        }}
      >
        <Typography color="gray" sx={{ pt: 2, fontSize: 28 }}>
          Add Users
        </Typography>
        <TextField id="outlined-start-adornment" label="First Name" />
        <TextField id="outlined-start-adornment" label="Last Name" />
        <TextField id="outlined-start-adornment" label="Phone Number" />
        <TextField id="outlined-start-adornment" label="E-mail" />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="admin"
            name="radio-buttons-group"
          >
            <FormControlLabel value="admin" control={<Radio />} label="admin" />
            <FormControlLabel value="user" control={<Radio />} label="user" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Disabled</FormLabel>
          <Checkbox sx={{ display: "flex", justifyContent: "flex-start" }} />
        </FormControl>
        <FormControl>
          <FormLabel>Avatar</FormLabel>
          <Button variant="contained" sx={{ width: 200 }}>
            UPLOAD AN IMAGE
          </Button>
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </FormControl>
        <FormControl
          sx={{ display: "flex", flexDirection: "row", gap: 2, pb: 3 }}
        >
          <Button variant="contained" sx={{ width: 80 }}>
            Save
          </Button>
          <Button variant="outlined" sx={{ width: 80 }}>
            Reset
          </Button>
          <Button variant="outlined" sx={{ width: 80 }}>
            Cancel
          </Button>
        </FormControl>
      </Box>
      <About />
    </Box>
  );
}
