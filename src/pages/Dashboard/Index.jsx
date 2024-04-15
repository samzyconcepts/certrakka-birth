import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";

const Index = () => {
    return (
        <main className="grid grid-cols-6">
            <Sidebar />
            <Outlet />
        </main>
    );
};

export default Index;
