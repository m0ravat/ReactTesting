import App from "./App";
import Profile from "./Profile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      { path: "spinach", element: <Spinach /> },
      { path: "popeye", element: <Popeye /> },
    ],
  },
];

export default routes;

