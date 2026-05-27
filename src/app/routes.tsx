import { createBrowserRouter } from "react-router";
import { EventList } from "./pages/EventList";
import { EventDetails } from "./pages/EventDetails";
import { Reservation } from "./pages/Reservation";
import { Confirmation } from "./pages/Confirmation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: EventList,
  },
  {
    path: "/event/:id",
    Component: EventDetails,
  },
  {
    path: "/reservation/:id",
    Component: Reservation,
  },
  {
    path: "/confirmation/:id",
    Component: Confirmation,
  },
]);
