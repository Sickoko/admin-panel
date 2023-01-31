import Sidebar from "../Components/Sidebar";
import UsersTable from "../Components/UsersTable";

export default function Users() {
  return (
    <div className="outer">
      {/* <h1>Users Page</h1> */}
      <Sidebar />
      <UsersTable />
    </div>
  );
}
