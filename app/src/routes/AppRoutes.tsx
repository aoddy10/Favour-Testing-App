import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Importing layout
import MainLayout from "@/components/layouts/MainLayout";

// Importing feature pages
import AccountPage from "@/features/AccountPage";
import CookPage from "@/features/CookPage";
import ListPage from "@/features/ListPage";
import NotFoundPage from "@/features/NotFoundPage";
import PlanPage from "@/features/PlanPage";
import ShopPage from "@/features/ShopPage";
import Recipe from "@/features/Recipe";
import PageWrapper from "@/components/PageWrapper";

export default function AppRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainLayout />}>
                    <Route
                        index
                        element={
                            <PageWrapper>
                                <PlanPage />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/list"
                        element={
                            <PageWrapper>
                                <ListPage />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/shop"
                        element={
                            <PageWrapper>
                                <ShopPage />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/cook"
                        element={
                            <PageWrapper>
                                <CookPage />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/account"
                        element={
                            <PageWrapper>
                                <AccountPage />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/recipe"
                        element={
                            <PageWrapper>
                                <Recipe />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <PageWrapper>
                                <NotFoundPage />
                            </PageWrapper>
                        }
                    />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}
