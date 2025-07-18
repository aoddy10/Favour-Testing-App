import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
    setRecipes,
    setFavoriteRecipes,
    setModernProperRecipes,
    setSelectedModernProperUser,
} from "@/store/recipeSlice";
import { useState } from "react";
import {
    fetchRecipes,
    fetchFavoriteRecipes,
    fetchModernProperRecipes,
} from "@/api/recipeService";

// import components
import SearchBox from "@/components/SearchBox";
import Button from "@/components/ui/Button";
import YourFavoriteSection from "@/components/FavoriteSection";
import RecipesSection from "@/components/RecipesSection";
import ModernProperSection from "@/components/ModernProperSection";

type ListTypeProps = "Quick Pick" | "All Recipes";

function PlanPage() {
    // Local state to manage selected plan type (Quick Pick or All Recipes)
    const [selected, setSelected] = useState<ListTypeProps>("Quick Pick");
    // Local state to track the search text input
    const [searchText, setSearchText] = useState("");

    const dispatch = useAppDispatch();
    const recipesInStore = useAppSelector((state) => state.recipe.recipes);

    // Load data from backend only if recipes are not already loaded in Redux store
    const loadData = async () => {
        // Temporary check this as do not need to load data again
        // As we did't update backend data yet, but need to test state updated
        if (recipesInStore.length === 0) {
            const [recipesData, favoriteRecipesData, modernProperResponse] =
                await Promise.all([
                    fetchRecipes(),
                    fetchFavoriteRecipes(),
                    fetchModernProperRecipes(),
                ]);

            dispatch(setRecipes(recipesData));
            dispatch(setFavoriteRecipes(favoriteRecipesData));
            dispatch(
                setModernProperRecipes(modernProperResponse.modernProperRecipes)
            );
            dispatch(
                setSelectedModernProperUser(
                    modernProperResponse.selectedModernProperUser
                )
            );
        }
    };

    // useEffect to trigger initial data loading when the component mounts
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="flex  flex-col gap-4 p-4">
            <h1 className="text-3xl mt-6">Let's Plan</h1>

            {/* Plan type toggle buttons */}
            <div className="flex justify-evenly bg-gray-200 rounded-full">
                <Button
                    variant={
                        selected === "Quick Pick" ? "secondary" : "transparent"
                    }
                    size="md"
                    className="w-full"
                    onClick={() => setSelected("Quick Pick")}
                >
                    Quick Pick
                </Button>
                <Button
                    variant={
                        selected === "All Recipes" ? "secondary" : "transparent"
                    }
                    size="md"
                    className="w-full"
                    onClick={() => setSelected("All Recipes")}
                >
                    All Recipes
                </Button>
            </div>

            {/* Search box and More+ button */}
            <div className="flex gap-3">
                <div className="flex-1">
                    <SearchBox
                        placeholder="Search Ingredients, Recipes"
                        searchText={searchText}
                        setSearchText={setSearchText}
                    />
                </div>
                <Button variant="outline" size="sm" className="px-6">
                    More +
                </Button>
            </div>

            {/* Render Your Favorite recipes section */}
            <YourFavoriteSection />

            {/* Render general Recipes section */}
            <RecipesSection />

            {/* Render The Modern Proper section */}
            <ModernProperSection />
        </div>
    );
}

export default PlanPage;
