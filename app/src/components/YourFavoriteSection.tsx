import type { RecipeCard as RecipeCardProps } from "@/types/recipe";
import RecipeCard from "@/components/RecipeCard";

function YourFavoriteSection({ recipes }: { recipes: RecipeCardProps[] }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <div className=" font-bold">Your Favorite</div>
                <div className=" text-sm">View All</div>
            </div>

            {recipes && recipes.length > 0 ? (
                <div className="flex gap-3 overflow-x-auto p-2">
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
