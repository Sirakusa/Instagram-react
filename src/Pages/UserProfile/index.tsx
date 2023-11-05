import UserDescription from "../../Modules/UserDescription";
import TabList from "../../Modules/Tablist";
import BarList from "../../Modules/BarList";

export default function UserProfile() {
  return (
    <div style={{ height: "100vh" }}>
      <UserDescription />
      <TabList />
      <BarList />
    </div>
  );
}
