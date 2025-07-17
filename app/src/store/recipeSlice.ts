/**
 * Redux slice for managing recipes in the application.
 * Provides actions to set, add, remove, and update recipes in the state.
 */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RecipeCard } from "@/types/recipe";
import type { SelectedModernProper } from "@/types/recipe";

interface RecipeState {
    recipes: RecipeCard[];
    favoriteRecipes: RecipeCard[];
    modernProperRecipes: RecipeCard[];
    selectedModernProperUser?: SelectedModernProper;
    selectedRecipe?: RecipeCard;
}

const initialState: RecipeState = {
    recipes: [],
    favoriteRecipes: [],
    modernProperRecipes: [],
};

const recipeSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        // Replace the entire recipes array with a new set of recipes.
        setRecipes(state, action: PayloadAction<RecipeCard[]>) {
            state.recipes = action.payload;
        },

        // Add a new recipe to the recipes array.
        addRecipe(state, action: PayloadAction<RecipeCard>) {
            state.recipes.push(action.payload);
        },

        // Remove a recipe from the recipes array by its ID.
        removeRecipe(state, action: PayloadAction<string>) {
            state.recipes = state.recipes.filter(
                (recipe) => recipe.recipe.id !== action.payload
            );
        },

        // Update an existing recipe in the recipes array by matching its ID.
        updateRecipe(state, action: PayloadAction<RecipeCard>) {
            const index = state.recipes.findIndex(
                (recipe) => recipe.recipe.id === action.payload.recipe.id
            );
            if (index !== -1) {
                state.recipes[index] = action.payload;
            }
        },

        // Replace the entire favoriteRecipes array with a new set of recipes.
        setFavoriteRecipes(state, action: PayloadAction<RecipeCard[]>) {
            state.favoriteRecipes = action.payload;
        },

        // Add a new recipe to the favoriteRecipes array.
        addFavoriteRecipe(state, action: PayloadAction<RecipeCard>) {
            state.favoriteRecipes.push(action.payload);
        },

        // Remove a recipe from the favoriteRecipes array by its ID.
        removeFavoriteRecipe(state, action: PayloadAction<string>) {
            state.favoriteRecipes = state.favoriteRecipes.filter(
                (recipe) => recipe.recipe.id !== action.payload
            );
        },

        // Update an existing recipe in the favoriteRecipes array by matching its ID.
        updateFavoriteRecipe(state, action: PayloadAction<RecipeCard>) {
            const index = state.favoriteRecipes.findIndex(
                (recipe) => recipe.recipe.id === action.payload.recipe.id
            );
            if (index !== -1) {
                state.favoriteRecipes[index] = action.payload;
            }
        },

        // Replace the entire modernProperRecipes array with a new set of recipes.
        setModernProperRecipes(state, action: PayloadAction<RecipeCard[]>) {
            state.modernProperRecipes = action.payload;
        },

        // Add a new recipe to the modernProperRecipes array.
        addModernProperRecipe(state, action: PayloadAction<RecipeCard>) {
            state.modernProperRecipes.push(action.payload);
        },

        // Remove a recipe from the modernProperRecipes array by its ID.
        removeModernProperRecipe(state, action: PayloadAction<string>) {
            state.modernProperRecipes = state.modernProperRecipes.filter(
                (recipe) => recipe.recipe.id !== action.payload
            );
        },

        // Update an existing recipe in the modernProperRecipes array by matching its ID.
        updateModernProperRecipe(state, action: PayloadAction<RecipeCard>) {
            const index = state.modernProperRecipes.findIndex(
                (recipe) => recipe.recipe.id === action.payload.recipe.id
            );
            if (index !== -1) {
                state.modernProperRecipes[index] = action.payload;
            }
        },

        // Set the selected modern proper user.
        setSelectedModernProperUser(
            state,
            action: PayloadAction<SelectedModernProper>
        ) {
            state.selectedModernProperUser = action.payload;
        },

        // Set the selected recipe for viewing details.
        setSelectedRecipe(state, action: PayloadAction<RecipeCard>) {
            state.selectedRecipe = action.payload;
        },
    },
});

export const {
    setRecipes,
    addRecipe,
    removeRecipe,
    updateRecipe,
    setFavoriteRecipes,
    addFavoriteRecipe,
    removeFavoriteRecipe,
    updateFavoriteRecipe,
    setModernProperRecipes,
    addModernProperRecipe,
    removeModernProperRecipe,
    updateModernProperRecipe,
    setSelectedModernProperUser,
    setSelectedRecipe,
} = recipeSlice.actions;

export default recipeSlice.reducer;
