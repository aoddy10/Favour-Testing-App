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
    costPerServing: number;
};

export type RecipeCard = {
    recipe: Recipe;
    inShop: boolean;
};

export type SelectedModernProper = {
    id: string;
    avatarUrl: string;
};
