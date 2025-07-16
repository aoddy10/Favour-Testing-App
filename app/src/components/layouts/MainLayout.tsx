import { Outlet } from "react-router-dom";
import Footer from "../Footer";

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow container mx-auto p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
