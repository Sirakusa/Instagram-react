import PostWall from "../../Modules/PostWall";
import BarList from "../../Modules/BarList";
import ListSuggestions from "../../Modules/ListSuggestions";

export default function UserProfile() {
  return (
    <div style={{ height: "100vh" }}>
      <ListSuggestions />
      <PostWall />
      <BarList />
    </div>
  );
}
