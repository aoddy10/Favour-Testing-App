import { useAppSelector } from "@/store/hooks";
import RecipeCard from "@/components/RecipeCard";

function ModernProperSection() {
    const selectedModernProperUser = useAppSelector(
        (state) => state.recipe.selectedModernProperUser
    );
    const modernProperRecipes = useAppSelector(
        (state) => state.recipe.modernProperRecipes
    );

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    {selectedModernProperUser &&
                    selectedModernProperUser.avatarUrl ? (
                        <img
                            src={selectedModernProperUser?.avatarUrl}
                            alt="Modern Proper Logo"
                            className="w-12 aspect-square rounded-full mr-2 object-cover sm:w-16"
                        />
                    ) : (
                        <div className="w-10 aspect-square rounded-full bg-gray-200 mr-2" />
                    )}
                    <div className="">The Modern Proper</div>
                </div>
                <div className=" text-sm text-secondary font-semibold cursor-pointer">
                    View All
                </div>
            </div>

            {modernProperRecipes && modernProperRecipes.length > 0 ? (
                <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
                    {modernProperRecipes.map((recipeCard) => (
                        <RecipeCard
                            key={recipeCard.recipe.id}
                            cardDetail={recipeCard}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500">
                    No favorite recipes found.
                </div>
            )}
        </div>
    );
}

export default ModernProperSection;
