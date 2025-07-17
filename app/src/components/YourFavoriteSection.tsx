import type { RecipeCardProps } from "@/types/recipe";
import RecipeCard from "@/components/RecipeCard";

function YourFavoriteSection({ recipes }: { recipes: RecipeCardProps[] }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <div className=" font-bold">Your Favorite</div>
                <div className=" text-sm">View All</div>
            </div>

            {recipes && recipes.length > 0 ? (
                <div className="flex gap-2 overflow-x-auto">
                    {recipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.recipe.id}
                            recipe={recipe.recipe}
                            inShop={recipe.inShop}
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

export default YourFavoriteSection;
