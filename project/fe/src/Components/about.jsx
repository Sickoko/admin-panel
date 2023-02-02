import { Container, Box } from "@mui/system";
import { Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function About() {
  return (
    <Container maxWidth="false">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Link href="#" style={{ textDecoration: "none" }}>
            Flatlogic
          </Link>
          <Link
            href="#"
            style={{ textDecoration: "none", paddingLeft: "15px" }}
          >
            About us
          </Link>
          <Link
            href="#"
            style={{ textDecoration: "none", paddingLeft: "15px" }}
          >
            Blog
          </Link>
        </Box>
        <Box style={{ color: "gray" }}>
          <FacebookIcon style={{ paddingRight: "15px" }} />
          <TwitterIcon style={{ paddingRight: "15px" }} />
          <GitHubIcon />
        </Box>
      </Box>
    </Container>
  );
}
