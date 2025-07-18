import { useAppSelector } from "@/store/hooks";
import RecipeCard from "@/components/RecipeCard";
import NoDataFoundBox from "./NoDataFoundBox";

function RecipesSection() {
    const recipeCards = useAppSelector((state) => state.recipe.recipes);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <div className="">Recipes</div>
                <div className=" text-sm text-secondary font-semibold cursor-pointer">
                    View All
                </div>
            </div>

            {recipeCards && recipeCards.length > 0 ? (
                <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
                    {recipeCards.map((recipeCard) => (
                        <RecipeCard
                            key={recipeCard.recipe.id}
                            cardDetail={recipeCard}
                        />
                    ))}
                </div>
            ) : (
                <NoDataFoundBox message="No recipes found." />
            )}
        </div>
    );
}

export default RecipesSection;
