import ShowPlayer from "../Views/ShowPlayer";
import ShowTeam from "../Views/ShowTeam";
import Home from "../Views/Home";

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Home,
    title: "Homepage",
    exact: true,
  },
  {
    path: "/showPlayer",
    component: ShowPlayer,
    title: "Show Player",
  },
  {
    path: "/showTeam",
    component: ShowTeam,
    title: "Show Team",
  },
];
