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
import { useState, useEffect } from "react";
import About from "./about";
export default function AddUser() {
  const URL = "http://localhost:8080/users";
  const newUser = {
    id: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
  };
  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState(newUser);
  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL); //reponse
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data: {{id: ....}}}
    setUsers(FETCHED_JSON.data);
  }
  async function handleSubmit(e) {
    e.preventDefault();

    if (!isUpdate) {
      const postData = {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        phonenumber: e.target.phonenumber.value,
        email: e.target.email.value,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      };

      const FETCHED_DATA = await fetch(URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
      setUsers(FETCHED_JSON.data);
    } else {
      const putData = {
        id: currentUser.id,
        firstname: currentUser.firstname,
        lastname: currentUser.lastname,
        phonenumber: currentUser.phonenumber,
        email: currentUser.email,
      };
      console.log(putData, "putdata");
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(putData),
      };

      const FETCHED_DATA = await fetch(URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
      setUsers(FETCHED_JSON.data);
      console.log(FETCHED_JSON.data, "FETCHED JSON");
      setIsUpdate(false);
      setCurrentUser(newUser);
    }
  }

  async function handleEdit(userId) {
    setIsUpdate(true);
    const filteredUser = users.filter((user) => user.id === userId)[0];
    if (filteredUser) {
      setCurrentUser({
        id: filteredUser.id,
        firstname: filteredUser.firstname,
        lastname: filteredUser.lastname,
        phonenumber: filteredUser.phonenumber,
        email: filteredUser.email,
      });
    }
  }
  function handleFirstname(e) {
    setCurrentUser({
      ...currentUser,
      firstname: e.target.value,
    });
  }
  function handleLastname(e) {
    setCurrentUser({
      ...currentUser,
      lastname: e.target.value,
    });
  }
  function handlePhonenumber(e) {
    setCurrentUser({
      ...currentUser,
      phonenumber: e.target.value,
    });
  }
  function handleEmail(e) {
    setCurrentUser({
      ...currentUser,
      email: e.target.value,
    });
  }

  function handleReset() {
    console.log("Reset button clicked");
  }

  function handleCancel() {
    console.log("Cancel button clicked");
  }
  return (
    <div>
      <div style={{ backgroundColor: "white", padding: 20, borderRadius: 5 }}>
        <Typography color="gray" sx={{ pt: 2, fontSize: 28 }}>
          Add Users
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 3,
            }}
          >
            <TextField
              id="outlined-start-adornment"
              label="First Name"
              name="firstname"
              value={currentUser.firstname}
              onChange={handleFirstname}
            />
            <TextField
              id="outlined-start-adornment"
              label="Last Name"
              name="lastname"
              value={currentUser.lastname}
              onChange={handleLastname}
            />
            <TextField
              id="outlined-start-adornment"
              label="Phone Number"
              name="phonenumber"
              value={currentUser.phonenumber}
              onChange={handlePhonenumber}
            />
            <TextField
              id="outlined-start-adornment"
              label="E-mail"
              name="email"
              value={currentUser.email}
              onChange={handleEmail}
            />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="admin"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="admin"
                />
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="user"
                />
              </RadioGroup>
            </FormControl>
            <FormLabel>Disabled</FormLabel>
            <Checkbox sx={{ display: "flex", justifyContent: "flex-start" }} />
            <FormLabel>Avatar</FormLabel>
            <Button variant="contained" sx={{ width: 200 }}>
              UPLOAD AN IMAGE
            </Button>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />

            <FormControl
              sx={{ display: "flex", flexDirection: "row", gap: 2, pb: 3 }}
            >
              <Button variant="contained" sx={{ width: 80 }} type="submit">
                Save
              </Button>
              <Button
                variant="outlined"
                sx={{ width: 80 }}
                onClick={() => handleReset()}
              >
                Reset
              </Button>
              <Button
                variant="outlined"
                sx={{ width: 80 }}
                onClick={() => handleCancel()}
              >
                Cancel
              </Button>
            </FormControl>
          </Box>
        </form>
      </div>
      <About />
    </div>
  );
}
