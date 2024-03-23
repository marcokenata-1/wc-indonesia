import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientDetails from "./pages/clientdetails/ClientDetails";
import App from "./App";
import ClientList from "./pages/clientlist/ClientList";
import ClientOnboarding from "./pages/clientonboarding/ClientOnboarding";
import ClientApproval from "./pages/clientapproval/ClientApproval";
import ApprovalDetails from "./pages/approvaldetails/ApprovalDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ClientList />,
      },
      {
        path: "client/:id",
        element: <ClientDetails />,
      },
      {
        path: "client-onboarding/",
        element: <ClientOnboarding />,
      },
      {
        path: "client-approval/",
        element: <ClientApproval />,
      },
      {
        path: "approval-details/:id",
        element: <ApprovalDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
