import { useEffect } from "react";
import {
    recipes,
    favoriteRecipes,
    modernProperRecipes,
    selectedModernProperUser,
} from "@/libs/mockData";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
    setRecipes,
    setFavoriteRecipes,
    setModernProperRecipes,
    setSelectedModernProperUser,
} from "@/store/recipeSlice";
import { useState } from "react";

// import components
import SearchBox from "@/components/SearchBox";
import Button from "@/components/ui/Button";
import YourFavoriteSection from "@/components/FavoriteSection";
import RecipesSection from "@/components/RecipesSection";
import ModernProperSection from "@/components/ModernProperSection";

type ListTypeProps = "Quick Pick" | "All Recipes";

function PlanPage() {
    const [selected, setSelected] = useState<ListTypeProps>("Quick Pick");
    const [searchText, setSearchText] = useState("");

    const recipesInStore = useAppSelector((state) => state.recipe.recipes);
    const dispatch = useAppDispatch();

    // Load initial mock data into Redux store on component mount
    useEffect(() => {
        if (!recipesInStore.length) {
            dispatch(setRecipes(recipes));
            dispatch(setFavoriteRecipes(favoriteRecipes));
            dispatch(setModernProperRecipes(modernProperRecipes));
            dispatch(setSelectedModernProperUser(selectedModernProperUser));
        }
    }, [dispatch, recipesInStore.length]);

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

            {/* Search input and More+ button */}
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

            {/* Your Favorite recipes section */}
            <YourFavoriteSection />

            {/* Recipes section */}
            <RecipesSection />

            {/* The Modern Proper section */}
            <ModernProperSection />
        </div>
    );
}

export default PlanPage;
