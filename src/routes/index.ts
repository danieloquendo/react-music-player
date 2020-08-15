import { Main } from "../components/Main";
import { Artist } from "../components/Artist";
import { Album } from "../components/Album";

const routes = [
  {
    path: "/",
    component: Main,
    exact: true,
  },
  {
    path: "/artist/:id",
    component: Artist,
    exact: true,
  },
  {
    path: "/album/:id",
    component: Album,
    exact: true,
  },
  {
    path: "*",
    component: Main,
    exact: true,
  },
];

export default routes;
