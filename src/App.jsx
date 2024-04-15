import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import SignUp from "./pages/Authentication/SignUp";
import Login from "./pages/Authentication/Login";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Index from "./pages/Dashboard/Index";
import Dashboard from "./pages/Dashboard/Components/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignUp />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/forgot_password",
        element: <ForgotPassword />,
    },
    {
        path: "/dashboard",
        element: <Index />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
