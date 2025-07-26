import RecipeCard from "@/components/RecipeCard";
import NoDataFoundBox from "./NoDataFoundBox";
import { useGetRecipesQuery } from "@/api/recipeApi";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hooks";
import { setRecipes } from "@/store/recipeSlice";
import { useEffect } from "react";

function RecipesSection() {
    const { isLoading, isUninitialized, isFetching, isError, data } =
        useGetRecipesQuery();
    const recipes = useAppSelector((state) => state.recipe.recipes);
    const dispatch = useDispatch();

    useEffect(() => {
        if (recipes.length === 0 && data) {
            dispatch(setRecipes(data));
        }
    }, [data, recipes, dispatch]);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <div className="">Recipes</div>
                <div className=" text-sm text-secondary font-semibold cursor-pointer">
                    View All
                </div>
            </div>

            {isLoading ||
                isUninitialized ||
                (isFetching && <NoDataFoundBox message="Loading..." />)}

            {isError && (
                <NoDataFoundBox message="Something went wrong. Please contact admin." />
            )}

            {recipes.length > 0 && (
                <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
                    {recipes.map((recipeCard) => (
                        <RecipeCard
                            key={recipeCard.recipe.id}
                            cardDetail={recipeCard}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default RecipesSection;
