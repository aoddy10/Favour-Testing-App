import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing layout
import MainLayout from "@/components/layouts/MainLayout";

// Importing feature pages
import AccountPage from "@/features/AccountPage";
import CookPage from "@/features/CookPage";
import ListPage from "@/features/ListPage";
import NotFoundPage from "@/features/NotFoundPage";
import PlanPage from "@/features/PlanPage";
import ShopPage from "@/features/ShopPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<PlanPage />} />
                    <Route path="/list" element={<ListPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/cook" element={<CookPage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
