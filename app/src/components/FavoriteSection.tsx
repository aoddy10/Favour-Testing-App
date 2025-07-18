import { useAppSelector } from "@/store/hooks";
import RecipeCard from "@/components/RecipeCard";
import NoDataFoundBox from "./NoDataFoundBox";

function YourFavoriteSection() {
    // Render favorite recipes from the Redux store
    const favoriteRecipes = useAppSelector(
        (state) => state.recipe.favoriteRecipes
    );

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <div className="">Your Favorite</div>
                <div className=" text-sm text-secondary font-semibold cursor-pointer">
                    View All
                </div>
            </div>

            {favoriteRecipes.length > 0 ? (
                <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
                    {favoriteRecipes.map((recipeCard) => (
                        <RecipeCard
                            key={recipeCard.recipe.id}
                            cardDetail={recipeCard}
                        />
                    ))}
                </div>
            ) : (
                <NoDataFoundBox message="No favorite recipes found." />
            )}
        </div>
    );
}

export default YourFavoriteSection;
