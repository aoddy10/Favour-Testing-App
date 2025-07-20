import { toggleLikeRecipe } from "@/store/recipeSlice";
import { useDispatch } from "react-redux";
import { Heart } from "lucide-react";

type LikeIconProps = {
    recipeId: string;
    isLike: boolean;
};

function LikeIcon({ recipeId, isLike }: LikeIconProps) {
    const dispatch = useDispatch();

    // Toggle like status of the provided recipe ID
    const handleToggleLike = () => {
        dispatch(toggleLikeRecipe(recipeId));
    };

    return (
        <div className="flex justify-end space-x-4">
            <button onClick={handleToggleLike}>
                <Heart
                    className={`inline cursor-pointer ${
                        isLike
                            ? "text-black fill-white"
                            : "text-gray-200 fill-transparent"
                    }`}
                />
            </button>
        </div>
    );
}

export default LikeIcon;
