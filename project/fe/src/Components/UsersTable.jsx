import { Button, FormControl, Typography, Link } from "@mui/material";
import { color, height, style } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import Header from "./Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Side from "./side";
import Direction from "./Direction";
import About from "./about";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function UsersTable({ users, setUsers }) {
  const URL = "http://localhost:8080/users";
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  async function handleDelete(id) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }
  function handleClick(event) {
    event.preventDefault();
  }
  const columns = [
    { field: "firstName", headerName: "First name", width: 230 },
    { field: "lastName", headerName: "Last name", width: 230 },
    { field: "PhoneNum", headerName: "Phone Number", width: 200 },
    { field: "email", headerName: "E-Mail", width: 232 },
    { field: "Role", headerName: "Role", width: 130 },
    { field: "Disabled", headerName: "Disabled", width: 130 },
    { field: "avatar", headerName: "Avatar", width: 130 },
    {
      field: "Action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <Box width="100%">
            <Stack direction="row" spacing={2}>
              <Link to={`/user/edit/${params.row.id}`}>
                <Button variant="outlined" color="success">
                  Edit
                </Button>
              </Link>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </Button>
            </Stack>
          </Box>
        );
      },
    },
  ];

  return (
    <div>
      {/* <div
        style={{
          backgroundColor: "white",
          height: "500px",
          borderRadius: 5,
          marginTop: 20,
          marginBottom: 15,
          paddingBottom: 20,
        }}
      >
        <div
          style={{
            height: "370px",
            width: "95%",

            padding: 25,
          }}
        >
          <Typography variant="h5" style={{ color: "gray", paddingBottom: 5 }}>
            Users
          </Typography>
          <FormControl
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Button variant="contained" style={{ marginBottom: "25px" }}>
              NEW
            </Button>
            <Button variant="contained" style={{ marginBottom: "25px" }}>
              ADD FILTER
            </Button>
          </FormControl> */}
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <About />
    </div>
  );
}
