import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home";
import { sanityClient } from "./client";
import Courses from "./components/Courses";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: async () => {
      return sanityClient.fetch(`*[_type == "contact"]`).then((data) => data);
    },
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return sanityClient
            .fetch(`*[_type=="testimonials"]`)
            .then((data) => data);
        },
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/courses/:courseName",
        loader: async ({ params }) => {
          const { courseName } = params;
          if (courseName === "mp") {
            return sanityClient
              .fetch(`*[_type == "course_detail" && course_type == "MP"]`)
              .then((data) => data);
          } else if (courseName === "cbse") {
            return sanityClient
              .fetch(`*[_type == "course_detail" && course_type == "CBSE"]`)
              .then((data) => data);
          } else if (courseName === "special") {
            return sanityClient
              .fetch(`*[_type == "course_detail" && course_type == "Special"]`)
              .then((data) => data);
          } else return null;
        },
        element: <Courses />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
