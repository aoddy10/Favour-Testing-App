export type ingredient = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    information: string;
    price: number;
    imageUrl: string;
};

export type Recipe = {
    id: string;
    title: string;
    image: string;
    listName: string;
    ownerAvatar: string;
    prepTime: number; // in minutes
    duration: number; // in minutes
    price: number;
    features: string[];
    ingredients: ingredient[];
    cookingMethod: string;
};

export type SelectedModernProper = {
    id: string;
    avatarUrl: string;
};

export type RecipeCard = {
    recipe: Recipe;
    inShop: boolean;
};

export type IngredientCard = {
    detail: ingredient;
    isSelected?: boolean;
};
