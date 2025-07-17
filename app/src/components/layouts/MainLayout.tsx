import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 pb-20">
            <main className="flex-grow container mx-auto p-4">
                <Outlet />
            </main>
            <Navbar />
        </div>
    );
}
