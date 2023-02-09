import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import About from "./about";
export default function AddProduct() {
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
    console.log("Fetch users");
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
      <div
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 5,
          marginBottom: "15px",
          marginTop: "35px",
        }}
      >
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
            <FormControl>
              <FormLabel sx={{ fontSize: "18px", pt: "50px" }}>Image</FormLabel>
              <FormControl
                sx={{ maxWidth: 200, marginLeft: "300px", marginTop: "-40px" }}
              >
                <Select
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem> </MenuItem>
                  <MenuItem> </MenuItem>
                  <MenuItem> </MenuItem>
                </Select>
              </FormControl>
            </FormControl>

            <FormLabel sx={{ fontSize: "18px" }}>
              Title
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "266px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="lastname"
                value={currentUser.lastname}
                onChange={handleLastname}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Subtitle
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "239px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentUser.phonenumber}
                onChange={handlePhonenumber}
              />
            </FormLabel>

            <FormLabel sx={{ fontSize: "18px" }}>
              Price
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "258px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentUser.phonenumber}
                onChange={handlePhonenumber}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Discount
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "230px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentUser.phonenumber}
                onChange={handlePhonenumber}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Description 1
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "194px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentUser.phonenumber}
                onChange={handlePhonenumber}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Description 2
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "194px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentUser.phonenumber}
                onChange={handlePhonenumber}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Code
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "258px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentUser.phonenumber}
                onChange={handlePhonenumber}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Hashtag
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "234px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentUser.phonenumber}
                onChange={handlePhonenumber}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Technology
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "209px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentUser.phonenumber}
                onChange={handlePhonenumber}
              />
            </FormLabel>
            <FormLabel sx={{ fontSize: "18px" }}>
              Rating
              <TextField
                sx={{
                  marginTop: "-10px",
                  marginLeft: "249px",
                  minWidth: "550px",
                }}
                id="outlined-start-adornment"
                name="phonenumber"
                value={currentUser.phonenumber}
                onChange={handlePhonenumber}
              />
            </FormLabel>

            <FormControl
              sx={{ display: "flex", flexDirection: "row", gap: 2, pb: 3 }}
            >
              <Button
                variant="contained"
                sx={{ width: 80, backgroundColor: "#1de9b6" }}
                type="submit"
              >
                Save
              </Button>
              <Button
                variant="contained"
                sx={{ width: 80, color: "#000" }}
                onClick={() => handleReset()}
              >
                Back
              </Button>
            </FormControl>
          </Box>
        </form>
      </div>
      <About />
    </div>
  );
}
