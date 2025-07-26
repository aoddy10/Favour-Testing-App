import RecipeCard from "@/components/RecipeCard";
import NoDataFoundBox from "./NoDataFoundBox";
import { useGetFavoriteRecipesQuery } from "@/api/recipeApi";
import { useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import { setFavoriteRecipes } from "@/store/recipeSlice";
import { useEffect } from "react";

function YourFavoriteSection() {
    const { isLoading, isUninitialized, isError, isFetching, data } =
        useGetFavoriteRecipesQuery();
    const favoriteRecipes = useAppSelector(
        (state) => state.recipe.favoriteRecipes
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (favoriteRecipes.length === 0 && data) {
            dispatch(setFavoriteRecipes(data));
        }
    }, [data, favoriteRecipes, dispatch]);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <div className="">Your Favorite</div>
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

            {favoriteRecipes.length > 0 && (
                <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
                    {favoriteRecipes.map((recipeCard) => (
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

export default YourFavoriteSection;
