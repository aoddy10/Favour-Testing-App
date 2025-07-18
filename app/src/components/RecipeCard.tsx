import { useAppDispatch } from "@/store/hooks";
import { setSelectedRecipe } from "@/store/recipeSlice";
import { useNavigate } from "react-router-dom";
import type { RecipeCard as RecipeCardProps } from "@/types/recipe";
import Button from "./ui/Button";
import { Heart, Clock4, UserRound } from "lucide-react";

export default function RecipeCard({
    cardDetail,
}: {
    cardDetail: RecipeCardProps;
}) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleCardClick = () => {
        // set selected recipe to be the selected one in store.
        dispatch(setSelectedRecipe(cardDetail));
        // navigate to recipe page
        navigate("/recipe");
    };

    return (
        <div
            className="bg-white rounded-xl p-2 space-y-2 min-w-38 sm:w-56 sm:min-w-56 shadow-md shadow-gray-300 shadow-offset cursor-pointer"
            onClick={handleCardClick}
        >
            <div>
                <div className="relative">
                    <img
                        src={cardDetail.recipe.image}
                        alt={cardDetail.recipe.title}
                        className="w-full aspect-square object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-black/50 rounded-md p-1">
                        <Heart
                            className={`w-5 aspect-square ${
                                cardDetail.isLike
                                    ? "text-white fill-white"
                                    : "text-white fill-transparent"
                            }`}
                        />
                    </div>
                </div>

                <div className="flex items-end space-x-2 px-2 -mt-4 sm:-mt-6">
                    <img
                        src={cardDetail.recipe.ownerAvatar}
                        alt="Owner"
                        className=" h-12 aspect-square rounded-full object-cover z-50 border-2 border-white sm:h-16"
                    />
                    <span className=" text-[8pt] text-gray-500 mb-2 sm:text-sm line-clamp-1 sm:mb-2">
                        {cardDetail.recipe.listName}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-1 px-2">
                <h2 className="font-serif text-purple-900">
                    {cardDetail.recipe.title}
                </h2>

                <div className="flex justify-evenly text-gray-500 text-xs">
                    <div className="flex items-center justify-start w-full gap-1">
                        <Clock4 className="w-5" /> {cardDetail.recipe.duration}m
                    </div>

                    <span className="flex items-center justify-start w-full gap-1">
                        <UserRound className="w-4" /> ${cardDetail.recipe.price}
                    </span>
                </div>

                <div className="flex px-1">
                    <Button
                        variant={cardDetail.inShop ? "secondary" : "outline"}
                        size="sm"
                        className="w-full"
                    >
                        {cardDetail.inShop ? "Remove" : "Add To List"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
