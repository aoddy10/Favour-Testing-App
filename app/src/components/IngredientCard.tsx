import React from "react";
import type { IngredientCard as IngredientCardProps } from "@/types/recipe";
import { Check } from "lucide-react";

function IngredientCard({
    ingredient,
    onChangeSelected,
}: {
    ingredient: IngredientCardProps;
    onChangeSelected: () => void;
}) {
    return (
        <div
            className={`flex space-x-4 ${
                !ingredient.isSelected && "opacity-50"
            }`}
        >
            {ingredient.detail.imageUrl ? (
                <img
                    src={ingredient.detail.imageUrl}
                    alt="Ingredient Image"
                    className=" w-18 object-contain rounded-full sm:w-28"
                />
            ) : (
                <div className="w-18 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                </div>
            )}

            <div className="flex flex-col">
                <div className="flex items-start justify-between space-x-2">
                    <div className="flex flex-col">
                        <h2 className="">{ingredient.detail.title}</h2>
                        <p className="text-sm text-gray-500 line-clamp-1 sm:line-clamp-2">
                            {ingredient.detail.subtitle}
                        </p>
                        <p className="text-xs text-gray-400 line-clamp-1 sm:line-clamp-3">
                            {ingredient.detail.description}
                        </p>
                    </div>

                    <div onClick={onChangeSelected}>
                        {ingredient.isSelected ? (
                            <Check className="h-6 w-6 aspect-square rounded-full p-1 bg-secondary  text-white" />
                        ) : (
                            <div className="h-6 w-6 aspect-square rounded-full p-1 border border-gray-400 text-gray-400" />
                        )}
                    </div>
                </div>

                <p className="text-sm text-gray-800 mt-3 line-clamp-2">
                    {ingredient.detail.information}
                </p>
                <span className="text-lg text-right mt-2">
                    ${ingredient.detail.price.toFixed(2)}
                </span>
            </div>
        </div>
    );
}

export default React.memo(IngredientCard);
