import type { RecipeCard as RecipeCardProps } from "@/types/recipe";
import Button from "./ui/Button";
import { Heart, Clock4, UserRound } from "lucide-react";

export default function RecipeCard(cardDetail: RecipeCardProps) {
    return (
        <div className="bg-white rounded-xl p-2 space-y-2 min-w-56 shadow-md shadow-gray-400">
            <div>
                <div className="relative">
                    <img
                        src={cardDetail.recipe.image}
                        alt={cardDetail.recipe.title}
                        className="w-full aspect-square object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-black/50 rounded-md p-2">
                        <Heart className="w-5 h-5" fill="white" />
                    </div>
                </div>

                <div className="flex items-end space-x-2 px-2 -mt-6">
                    <img
                        src={cardDetail.recipe.ownerAvatar}
                        alt="Owner"
                        className=" h-16 aspect-square rounded-full object-cover z-50 border-2 border-white"
                    />
                    <span className="text-sm text-gray-500 mb-2">
                        {cardDetail.recipe.listName}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-2 px-2">
                <h2 className="text-lg font-semibold text-gray-400">
                    {cardDetail.recipe.title}
                </h2>

                <div className="flex justify-evenly text-gray-500 text-sm">
                    <div className="flex items-center justify-start w-full gap-2">
                        <Clock4 /> {cardDetail.recipe.duration}m
                    </div>

                    <span className="flex items-center justify-start w-full gap-2">
                        <UserRound /> ${cardDetail.recipe.price}
                    </span>
                </div>

                <div className="flex px-4">
                    <Button
                        variant={cardDetail.inShop ? "secondary" : "outline"}
                        className="w-full"
                    >
                        {cardDetail.inShop ? "Remove" : "Add To List"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
