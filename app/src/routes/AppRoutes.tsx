import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";

// Importing layout
import MainLayout from "@/components/layouts/MainLayout";

// Lazy loading feature pages
const AccountPage = lazy(() => import("@/features/AccountPage"));
const CookPage = lazy(() => import("@/features/CookPage"));
const ListPage = lazy(() => import("@/features/ListPage"));
const NotFoundPage = lazy(() => import("@/features/NotFoundPage"));
const ErrorPage = lazy(() => import("@/features/ErrorPage"));
const PlanPage = lazy(() => import("@/features/PlanPage"));
const ShopPage = lazy(() => import("@/features/ShopPage"));
const RecipePage = lazy(() => import("@/features/RecipePage"));
import PageWrapper from "@/components/PageWrapper";
import LoadingScreen from "@/components/LoadingScreen";

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
                                <Suspense fallback={<LoadingScreen />}>
                                    <PlanPage />
                                </Suspense>
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/list"
                        element={
                            <PageWrapper>
                                <Suspense fallback={<LoadingScreen />}>
                                    <ListPage />
                                </Suspense>
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/shop"
                        element={
                            <PageWrapper>
                                <Suspense fallback={<LoadingScreen />}>
                                    <ShopPage />
                                </Suspense>
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/cook"
                        element={
                            <PageWrapper>
                                <Suspense fallback={<LoadingScreen />}>
                                    <CookPage />
                                </Suspense>
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/account"
                        element={
                            <PageWrapper>
                                <Suspense fallback={<LoadingScreen />}>
                                    <AccountPage />
                                </Suspense>
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/recipe"
                        element={
                            <PageWrapper>
                                <Suspense fallback={<LoadingScreen />}>
                                    <RecipePage />
                                </Suspense>
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="error"
                        element={
                            <PageWrapper>
                                <Suspense fallback={<LoadingScreen />}>
                                    <ErrorPage />
                                </Suspense>
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <PageWrapper>
                                <Suspense fallback={<LoadingScreen />}>
                                    <NotFoundPage />
                                </Suspense>
                            </PageWrapper>
                        }
                    />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}
