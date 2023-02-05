import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { fontSize } from "@mui/system";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs() {
  return (
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
          User
        </Link>
        <Typography color="text.primary" fontSize={18}>
          New
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
