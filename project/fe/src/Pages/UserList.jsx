import Header from "../Components/Header";
import UsersTable from "../Components/UsersTable";
import Side from "../Components/side";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { fontSize } from "@mui/system";
export default function UserList() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div>
      <Header />
      <div className="side">
        <Side />
        <Container maxWidth="false">
          <div onClick={handleClick} sx={{ mb: 5 }}>
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{
                backgroundColor: "white",
                mb: 2,
                mt: 2,
                fontSize: 18,
                p: 1,
                borderRadius: 1,
                paddingLeft: 3,
              }}
            >
              <Link underline="hover" color="inherit" href="/">
                App
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Users
              </Link>
            </Breadcrumbs>
          </div>
          <UsersTable />
        </Container>
      </div>
    </div>
  );
}
