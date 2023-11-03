import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile.tsx";
import NotFoundPage from "./pages/404.tsx";
import SavedPost from "./pages/SavedPost.tsx";
import Notification from "./pages/Notification.tsx";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/saved",
    element: <SavedPost />,
  },
  {
    path: "/notifications",
    element: <Notification />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile/*",
    element: <Profile />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
);
