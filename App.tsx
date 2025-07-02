import DashboardLayout from "./layouts/DashboardLayout";
import UserGroups from "./Pages/UserGroups"; // adjust path if needed

function App() {
  return (
    <DashboardLayout>
      <UserGroups />
    </DashboardLayout>
  );
}

export default App;
