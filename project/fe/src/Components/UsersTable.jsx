import { Button, FormControl, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import About from "./about";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";

import { Link } from "react-router-dom";

export default function UsersTable() {
  const URL = "http://localhost:8080/users";
  const [users, setUsers] = useState([]);
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

  const columns = [
    { field: "firstname", headerName: "First name", width: 230 },
    { field: "lastname", headerName: "Last name", width: 230 },
    { field: "phonenumber", headerName: "Phone Number", width: 200 },
    { field: "email", headerName: "E-Mail", width: 232 },
    { field: "role", headerName: "Role", width: 130 },
    { field: "Disabled", headerName: "Disabled", width: 130 },
    { field: "avatar", headerName: "Avatar", width: 110 },

    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <Box width="100%">
            <Stack direction="row" spacing={1}>
              <Link to={`/user/edit/${params.row.id}`}>
                <Button variant="contained">Edit</Button>
              </Link>
              <Button
                variant="contained"
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
      <div
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
          </FormControl>

          <DataGrid
            rows={users}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
      <About />
    </div>
  );
}
