import RecipeCard from "@/components/RecipeCard";
import NoDataFoundBox from "./NoDataFoundBox";
import { useGetModernProperRecipesQuery } from "@/api/recipeApi";
import { useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import {
    setModernProperRecipes,
    setSelectedModernProperUser,
} from "@/store/recipeSlice";
import { useEffect } from "react";

function ModernProperSection() {
    const { isLoading, isUninitialized, isFetching, isError, data } =
        useGetModernProperRecipesQuery();
    const modernRecipes = useAppSelector(
        (state) => state.recipe.favoriteRecipes
    );
    const selectedModernProperUser = useAppSelector(
        (state) => state.recipe.selectedModernProperUser
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (modernRecipes.length === 0 && data) {
            dispatch(setModernProperRecipes(data.modernProperRecipes));
            dispatch(
                setSelectedModernProperUser(data.selectedModernProperUser)
            );
        }
    }, [data, modernRecipes, dispatch]);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    {selectedModernProperUser &&
                    selectedModernProperUser.avatarUrl ? (
                        <img
                            src={selectedModernProperUser?.avatarUrl}
                            loading="lazy"
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

            {isLoading ||
                isUninitialized ||
                (isFetching && <NoDataFoundBox message="Loading..." />)}

            {isError && (
                <NoDataFoundBox message="Something went wrong. Please contact admin." />
            )}

            {modernRecipes.length > 0 && (
                <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
                    {modernRecipes.map((recipeCard) => (
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

export default ModernProperSection;
