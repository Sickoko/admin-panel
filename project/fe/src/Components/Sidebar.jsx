import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
export default function () {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a>
            <AccountCircleIcon />
            Profile
          </a>
        </li>
        <li>
          <a>
            <HomeIcon />
            Dashboard
          </a>
        </li>
        <li>
          <a>E-commerce</a>
        </li>
        <li>
          <a>User</a>
        </li>
        <li>
          <a>Documentation</a>
        </li>
        <h4>Template</h4>
        <li>
          <a>Core</a>
        </li>
        <li>
          <a>Tables</a>
        </li>
        <li>
          <a>UI Elements</a>
        </li>
        <li>
          <a>Forms</a>
        </li>
        <li>
          <a>Charts</a>
        </li>
        <li>
          <a>Grid</a>
        </li>
        <li>
          <a>Maps</a>
        </li>
        <li>
          <a>Extra</a>
        </li>
      </ul>
    </div>
  );
}
