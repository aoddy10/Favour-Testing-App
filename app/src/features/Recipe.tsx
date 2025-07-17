import { useState } from "react";
import Button from "@/components/ui/Button";

import { ArrowLeft, Heart, Send, Clock4, CookingPot } from "lucide-react";
import { useAppSelector } from "@/store/hooks";

type SelectedTabProps = "Ingredients" | "Method";

type DataProps = {
    servings: number;
};

function Recipe() {
    const [selectedTab, setSelectedTab] =
        useState<SelectedTabProps>("Ingredients");
    const [data, setData] = useState<DataProps>({
        servings: 1,
    });

    const selectedRecipe = useAppSelector(
        (state) => state.recipe.selectedRecipe
    );

    // TODO: make it better display when no recipe is selected
    if (!selectedRecipe) {
        return <div>No recipe selected.</div>;
    }

    const handleServingsChange = (change: number) => {
        setData((prev) => ({
            ...prev,
            servings: Math.max(1, prev.servings + change),
        }));
    };

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between my-4">
                <ArrowLeft className="cursor-pointer" />
                <div className="flex justify-end space-x-4">
                    <Heart className="inline cursor-pointer" />
                    <Send className="inline cursor-pointer" />
                </div>
            </div>

            <div>
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

            <h1 className="text-3xl font-bold text-gray-400">
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

            {/* ingredients and Method selection */}
            <div className="flex justify-evenly bg-gray-200 rounded-full">
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
                        selectedTab === "Method" ? "secondary" : "transparent"
                    }
                    size="md"
                    className="w-full"
                    onClick={() => setSelectedTab("Method")}
                >
                    Method
                </Button>
            </div>

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
                        {selectedRecipe.recipe.costPerServing
                            ? selectedRecipe.recipe.costPerServing
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
    );
}

export default Recipe;
