import { Route, Routes } from "react-router-dom";
import { loginRoutes, userRoutes } from "./routes";

// const usuario = { id: 1 };
const usuario = null;

export default function Router() {
  if (!usuario) {
    return (
      <Routes>
        {loginRoutes.map(({ path, Element }) => (
          <Route path={path} element={<Element />} />
        ))}
      </Routes>
    );
  }

  return (
    <Routes>
      {userRoutes.map(({ path, Element }) => (
        <Route path={path} element={<Element />} />
      ))}
    </Routes>
  );
}
