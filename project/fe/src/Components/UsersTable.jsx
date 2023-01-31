import { DataGrid } from "@mui/x-data-grid";

export default function UsersTable() {
  const columns = [
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "PhoneNum", headerName: "Phone Number", width: 130 },
    { field: "email", headerName: "E-Mail", width: 103 },
    { field: "Role", headerName: "Role", width: 130 },
    { field: "Disabled", headerName: "Disabled", width: 130 },
    { field: "avatar", headerName: "Avatar", width: 130 },
    { field: "action", headerName: "Actions", width: 130 },
  ];
  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      email: "john@doe.com",
      role: "user",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      email: "john@doe.com",
      role: "user",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      email: "john@doe.com",
      role: "user",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      email: "john@doe.com",
      role: "admin",
    },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
