import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import About from "./about";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";

import { Link } from "react-router-dom";

export default function UsersTable({ products, setProducts }) {
  const URL = "http://localhost:8080/products";
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
    { field: "id", headerName: "id", width: 230 },
    { field: "image", headerName: "Image", width: 232 },
    { field: "title", headerName: "Title", width: 230 },
    { field: "subtitle", headerName: "Subtitle", width: 230 },
    { field: "discount", headerName: "Discount", width: 230 },
    { field: "description", headerName: "Description 1", width: 130 },
    { field: "descriptionn", headerName: "Description 2", width: 130 },
    { field: "price", headerName: "Price", width: 200 },
    { field: "code", headerName: "Code", width: 110 },
    { field: "hashtag", headerName: "Hashtag", width: 110 },
    { field: "technology", headerName: "Technology", width: 110 },
    {
      field: "Rating",
      headerName: "Rating",
      width: 150,
      renderCell: (params) => {
        return (
          <Box width="100%">
            <Stack direction="row" spacing={2}>
              <Link to={`/product/edit/${params.row.id}`}>
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
          {products && (
            <DataGrid
              rows={products}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          )}
        </div>
      </div>
      <About />
    </div>
  );
}
