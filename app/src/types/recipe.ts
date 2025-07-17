export type RecipeProps = {
    id: string;
    title: string;
    image: string;
    listName: string;
    ownerAvatar: string;
    duration: number; // in minutes
    price: number;
};

export type RecipeCardProps = {
    recipe: RecipeProps;
    inShop: boolean;
};
