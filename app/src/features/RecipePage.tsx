import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";
import { toggleLikeRecipe } from "@/store/recipeSlice";
import Button from "@/components/ui/Button";

import { ArrowLeft, Heart, Send, Clock4, CookingPot } from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import IngredientCard from "@/components/IngredientCard";
import type { IngredientCard as IngredientCardProps } from "@/types/recipe";

type SelectedTabProps = "Ingredients" | "Method";

type DataProps = {
    servings: number;
    costPerServing: number;
    totalAmount: number;
};

function Recipe() {
    // State to track the selected tab: "Ingredients" or "Method"
    const [selectedTab, setSelectedTab] =
        useState<SelectedTabProps>("Ingredients");

    const selectedRecipe = useAppSelector(
        (state) => state.recipe.selectedRecipe
    );

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // State to manage servings, total amount, and cost per serving
    const [data, setData] = useState<DataProps>({
        servings: 0,
        totalAmount: 0,
        costPerServing: 0,
    });

    // Initialize total amount and cost per serving based on selected recipe's ingredients
    useEffect(() => {
        const initialTotalAmount =
            selectedRecipe?.recipe.ingredients?.reduce(
                (sum, ingredient) => sum + (ingredient.price || 0),
                0
            ) || 0;

        setData({
            servings: 1,
            totalAmount: initialTotalAmount,
            costPerServing: initialTotalAmount,
        });
    }, []);

    const [ingredientCards, setIngredientCards] = useState<
        IngredientCardProps[]
    >(
        selectedRecipe?.recipe.ingredients?.map((ingredient) => ({
            detail: ingredient,
            isSelected: true,
        })) || []
    );

    // Toggle selection of an ingredient by index and recalculate costs
    const handleToggleSelected = (index: number) => {
        setIngredientCards((prevCards) => {
            const updatedCards = prevCards.map((card, i) =>
                i === index ? { ...card, isSelected: !card.isSelected } : card
            );
            // After updating ingredientCards, recalculate costs
            setTimeout(() => {
                recalculateCosts(updatedCards);
            }, 0);
            return updatedCards;
        });
    };

    // Recalculate the total amount and cost per serving based on selected ingredients
    const recalculateCosts = (cards?: IngredientCardProps[]) => {
        const currentCards = cards || ingredientCards;
        const total = currentCards
            .filter((card) => card.isSelected)
            .reduce((sum, card) => sum + (card.detail.price || 0), 0);
        setData((prev) => ({
            ...prev,
            totalAmount: total,
            costPerServing: total / prev.servings,
        }));
    };

    // Toggle like status of the current selected recipe
    const handleToggleLike = () => {
        if (selectedRecipe) {
            dispatch(toggleLikeRecipe(selectedRecipe.recipe.id));
        }
    };

    // TODO: make it better display when no recipe is selected
    if (!selectedRecipe) {
        return <div>No recipe selected.</div>;
    }

    // Handle increment/decrement of servings and update costPerServing
    const handleServingsChange = (change: number) => {
        setData((prev) => {
            const newServings = Math.max(1, prev.servings + change);
            return {
                ...prev,
                servings: newServings,
                costPerServing: prev.totalAmount / newServings,
            };
        });
    };

    // Navigate back to the home page
    const handleBackButtonClick = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col pb-20">
            {/* Top button section */}
            <div className="flex items-center justify-between px-4 my-6">
                <button onClick={handleBackButtonClick}>
                    <ArrowLeft className="cursor-pointer" />
                </button>
                <div className="flex justify-end space-x-4">
                    <button onClick={handleToggleLike}>
                        <Heart
                            className={`inline cursor-pointer ${
                                selectedRecipe.isLike
                                    ? "text-black fill-black"
                                    : "text-gray-300 fill-transparent"
                            }`}
                        />
                    </button>
                    <Send className="inline cursor-pointer" />
                </div>
            </div>

            {/* Image and recipe info section */}
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 sm:pb-4">
                <div className="px-4">
                    <div className="w-full sm:w-72">
                        <div className="relative">
                            <img
                                src={selectedRecipe.recipe.image}
                                alt={selectedRecipe.recipe.title}
                                className="w-full aspect-square object-cover rounded-2xl"
                            />
                        </div>

                        <div className="flex items-end space-x-4 px-4 -mt-12">
                            <img
                                src={selectedRecipe.recipe.ownerAvatar}
                                alt="Owner"
                                className="w-24 aspect-square rounded-full object-cover border-6 border-white z-50"
                            />
                            <span className="text-gray-500 w-full pb-4 text-lg">
                                {selectedRecipe.recipe.listName}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="flex flex-col gap-2 px-4">
                        <h1 className="text-4xl text-purple-900 font-serif">
                            {selectedRecipe.recipe.title}
                        </h1>

                        <div className="flex space-x-8 text-gray-500">
                            <span className="flex items-center space-x-2">
                                <CookingPot />{" "}
                                <span>
                                    Prep{" "}
                                    {selectedRecipe.recipe.duration
                                        ? selectedRecipe.recipe.duration
                                        : "-"}{" "}
                                    mins
                                </span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <Clock4 />
                                <span>
                                    Prep{" "}
                                    {selectedRecipe.recipe.duration
                                        ? selectedRecipe.recipe.duration
                                        : "-"}{" "}
                                    mins
                                </span>
                            </span>
                        </div>

                        <div className="text-gray-500">
                            {selectedRecipe.recipe.features?.join(" · ")}
                        </div>
                    </div>

                    {/* Select serving section */}
                    <div className="bg-white sm:bg-gray-100 px-4 py-4 mt-4">
                        <div className="flex items-center justify-between bg-gray-200 rounded-full px-4 py-2">
                            <div>
                                <button
                                    className="text-xl rounded-full bg-white/70 flex items-center justify-center h-8 aspect-square"
                                    onClick={() => handleServingsChange(-1)}
                                >
                                    -
                                </button>
                            </div>
                            <div className="text-center">
                                <div className="text-secondary text-sm font-semibold">
                                    {data.servings} Servings
                                </div>
                                <div className="text-gray-500 text-xs">
                                    {data.costPerServing
                                        ? data.costPerServing.toFixed(2)
                                        : "-"}{" "}
                                    per serving
                                </div>
                            </div>
                            <button
                                className="text-xl rounded-full bg-white/70 flex items-center justify-center h-8 aspect-square"
                                onClick={() => handleServingsChange(1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col space-y-4 px-4 bg-white pb-4">
                {/* ingredients and Method selection */}
                <div className="flex justify-center">
                    <div className="flex justify-evenly bg-gray-200 rounded-full w-full sm:w-1/2 sm:mt-4">
                        <Button
                            variant={
                                selectedTab === "Ingredients"
                                    ? "secondary"
                                    : "transparent"
                            }
                            size="md"
                            className="w-full"
                            onClick={() => setSelectedTab("Ingredients")}
                        >
                            Ingredients
                        </Button>
                        <Button
                            variant={
                                selectedTab === "Method"
                                    ? "secondary"
                                    : "transparent"
                            }
                            size="md"
                            className="w-full"
                            onClick={() => setSelectedTab("Method")}
                        >
                            Method
                        </Button>
                    </div>
                </div>

                {selectedTab === "Ingredients" ? (
                    <>
                        {/* Render each ingredient with selection toggle */}
                        {ingredientCards?.map((ingredient, index) => (
                            <div
                                key={`ingredient-${index}`}
                                className="w-full border-t border-gray-300 pt-4"
                            >
                                <IngredientCard
                                    ingredient={ingredient}
                                    onChangeSelected={() =>
                                        handleToggleSelected(index)
                                    }
                                />
                            </div>
                        ))}
                    </>
                ) : (
                    // Render cooking method instructions if Method tab is selected
                    <div className="p-2 min-h-60 text-gray-600">
                        {selectedRecipe.recipe.cookingMethod &&
                            selectedRecipe.recipe.cookingMethod}
                    </div>
                )}
            </div>

            {/* Button to add selected ingredients to shopping list with total cost display */}
            <div className="flex justify-center">
                <Button
                    variant="secondary"
                    size="md"
                    className="flex items-center space-x-4 mx-8 py-2 justify-center mt-4 w-full sm:w-1/2"
                >
                    <div>Add to my shop</div>
                    <div className=" text-white/60">
                        Total ${data.totalAmount.toFixed(2)}
                    </div>
                </Button>
            </div>
        </div>
    );
}

export default Recipe;
