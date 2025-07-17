import type { RecipeCard as RecipeCardProps } from "@/types/recipe";
import RecipeCard from "@/components/RecipeCard";

const avatarUrl =
    "data:image/jpeg;base64,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";

function ModernProperSection({ recipes }: { recipes: RecipeCardProps[] }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src={avatarUrl}
                        alt="Modern Proper Logo"
                        className="w-10 aspect-square rounded-full mr-2 object-cover"
                    />
                    <div className="">The Modern Proper</div>
                </div>
                <div className=" text-sm text-secondary font-semibold cursor-pointer">
                    View All
                </div>
            </div>

            {recipes && recipes.length > 0 ? (
                <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
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

export default ModernProperSection;
