import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputAdornment, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
export default function Form() {
  return (
    <Box
      component="form"
      className="Form"
      sx={{
        "& > :not(style)": { m: 1, ps: 5, width: "170ch" },
        backgroundColor: "white",
      }}
      noValidate
    >
      <Typography color="gray" sx={{ pt: 3, ps: 3 }}>
        Add User
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
      </FormControl>
    </Box>
  );
}
