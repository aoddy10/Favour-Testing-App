import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RecipeCard, SelectedModernProper } from "@/types/recipe";

export const recipeApi = createApi({
    reducerPath: "recipeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_API_URL,
        prepareHeaders: (headers) => {
            const apiKey = import.meta.env.VITE_API_KEY;
            if (apiKey) {
                headers.set("Authorization", `API Key ${apiKey}`);
            }
            headers.set("Content-Type", "application/json");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getRecipes: builder.query<RecipeCard[], void>({
            query: () => "/recipes",
        }),
        getFavoriteRecipes: builder.query<RecipeCard[], void>({
            query: () => "/recipes?type=favorites",
        }),
        getModernProperRecipes: builder.query<
            {
                modernProperRecipes: RecipeCard[];
                selectedModernProperUser: SelectedModernProper;
            },
            void
        >({
            query: () => "/recipes?type=modern-proper",
        }),
    }),
});

export const {
    useGetRecipesQuery,
    useGetFavoriteRecipesQuery,
    useGetModernProperRecipesQuery,
} = recipeApi;
