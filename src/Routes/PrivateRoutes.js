import PageNotFound from "Views/404PageNotFound";
import Match from "Views/Match";
import SelectTeam from "Views/SelectTeam";

export const PRIVATE_ROUTES = [
  {
    path: "/selectTeam",
    component: SelectTeam,
    title: "Select Team",
  },
  {
    path: "/selectTeam",
    component: SelectTeam,
    title: "Select Team",
  },
  {
    path: "/match/:matchUniqueKey",
    component: Match,
    title: "match",
  },
];
