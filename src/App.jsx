import React from "react";
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Event from "./pages/Event";
import Dishes from "./pages/Dishes";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import ErrorPage from "./pages/ErrorPage";

 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Event",
    element: <Event />,
  },
  {
    path: "/Team",
    element: <Team />,
  },
  {
    path: "/Dishes",
    element: <Dishes />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/Gallery",
    element: <Gallery />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
