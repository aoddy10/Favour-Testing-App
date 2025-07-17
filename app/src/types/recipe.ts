export type Recipe = {
    id: string;
    title: string;
    image: string;
    listName: string;
    ownerAvatar: string;
    duration: number; // in minutes
    price: number;
};

export type RecipeCard = {
    recipe: Recipe;
    inShop: boolean;
};

export type SelectedModernProper = {
    id: string;
    avatarUrl: string;
};
