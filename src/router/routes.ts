import Login from "../Pages/Login";
import Register from "../Modules/Register";

export const loginRoutes = [
  {
    path: "/",
    Element: Login,
  },
  {
    path: "/register",
    Element: Register,
  },
  // post id
];

export const userRoutes = [
  {
    path: "/",
    Element: Login,
  },
  {
    path: "/register",
    Element: Register,
  },
];
