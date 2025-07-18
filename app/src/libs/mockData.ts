import type { RecipeCard as RecipeCardProps } from "@/types/recipe";
import type { SelectedModernProper as SelectedModernProperProps } from "@/types/recipe";
import type { ingredient as IngredientProps } from "@/types/recipe";

const mockIngredient: IngredientProps = {
    id: "1",
    title: "1.25 cups Rice",
    subtitle: "Campbell's Real Stock Chicken Stock Liquid 500ml",
    description:
        "Campbell's Real Stock Chicken is a delicious chicken stock made with 100% Australian chicken that you can add to any meal for extra flavour. It's made from scratch using real Australian grown ingredients.",
    information:
        "Chicken Stock (98%), (Water, Chicken, Carrots, Celery, Cabbage, Onions, Parsley, Sage Extract, Natural Antioxidant (Rosemary Extract)), Salt, Sugar, Glucose, Yeast Extract.",
    price: 4.3,
    imageUrl:
        "data:image/jpeg;base64,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",
};

// mock data
export const favoriteRecipes: RecipeCardProps[] = [
    {
        recipe: {
            id: "1",
            title: "Spaghetti Carbonara",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700,636",
            listName: "Italian Classics",
            ownerAvatar:
                "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186122.jpg?semt=ais_items_boosted&w=740",
            duration: 30,
            price: 12.99,
            prepTime: 15,
            features: ["Kid Friendly", "Gluten Free", "Low Carb"],
            ingredients: [
                mockIngredient,
                mockIngredient,
                mockIngredient,
                mockIngredient,
            ],
            cookingMethod:
                "Sauté guanciale until golden. Mix hot cooked pasta vigorously with the guanciale, egg, cheese and a splash of pasta cooking water and watch as it transforms into a luxurious, creamy sauce.",
        },
        inShop: false,
        isLike: false,
    },
    {
        recipe: {
            id: "2",
            title: "Spaghetti Carbonara",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700,636",
            listName: "Italian Classics",
            ownerAvatar:
                "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186122.jpg?semt=ais_items_boosted&w=740",
            duration: 30,
            price: 12.99,
            prepTime: 15,
            features: ["Kid Friendly", "Gluten Free", "Low Carb"],
            ingredients: [
                mockIngredient,
                mockIngredient,
                mockIngredient,
                mockIngredient,
            ],
            cookingMethod:
                "Sauté guanciale until golden. Mix hot cooked pasta vigorously with the guanciale, egg, cheese and a splash of pasta cooking water and watch as it transforms into a luxurious, creamy sauce.",
        },
        inShop: true,
        isLike: true,
    },
    {
        recipe: {
            id: "3",
            title: "Spaghetti Carbonara",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700,636",
            listName: "Italian Classics",
            ownerAvatar:
                "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186122.jpg?semt=ais_items_boosted&w=740",
            duration: 30,
            price: 12.99,
            prepTime: 15,
            features: ["Kid Friendly", "Gluten Free", "Low Carb"],
            ingredients: [
                mockIngredient,
                mockIngredient,
                mockIngredient,
                mockIngredient,
            ],
            cookingMethod:
                "Sauté guanciale until golden. Mix hot cooked pasta vigorously with the guanciale, egg, cheese and a splash of pasta cooking water and watch as it transforms into a luxurious, creamy sauce.",
        },
        inShop: true,
        isLike: true,
    },
];

export const recipes: RecipeCardProps[] = [
    {
        recipe: {
            id: "1",
            title: "Spaghetti Carbonara",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700,636",
            listName: "Italian Classics",
            ownerAvatar:
                "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186122.jpg?semt=ais_items_boosted&w=740",
            duration: 30,
            price: 12.99,
            prepTime: 15,
            features: ["Kid Friendly", "Gluten Free", "Low Carb"],
            ingredients: [
                mockIngredient,
                mockIngredient,
                mockIngredient,
                mockIngredient,
            ],
            cookingMethod:
                "Sauté guanciale until golden. Mix hot cooked pasta vigorously with the guanciale, egg, cheese and a splash of pasta cooking water and watch as it transforms into a luxurious, creamy sauce.",
        },
        inShop: false,
        isLike: false,
    },
    {
        recipe: {
            id: "2",
            title: "Spaghetti Carbonara",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700,636",
            listName: "Italian Classics",
            ownerAvatar:
                "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186122.jpg?semt=ais_items_boosted&w=740",
            duration: 30,
            price: 12.99,
            prepTime: 15,
            features: ["Kid Friendly", "Gluten Free", "Low Carb"],
            ingredients: [
                mockIngredient,
                mockIngredient,
                mockIngredient,
                mockIngredient,
            ],
            cookingMethod:
                "Sauté guanciale until golden. Mix hot cooked pasta vigorously with the guanciale, egg, cheese and a splash of pasta cooking water and watch as it transforms into a luxurious, creamy sauce.",
        },
        inShop: false,
        isLike: false,
    },
    {
        recipe: {
            id: "3",
            title: "Spaghetti Carbonara",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700,636",
            listName: "Italian Classics",
            ownerAvatar:
                "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186122.jpg?semt=ais_items_boosted&w=740",
            duration: 30,
            price: 12.99,
            prepTime: 15,
            features: ["Kid Friendly", "Gluten Free", "Low Carb"],
            ingredients: [
                mockIngredient,
                mockIngredient,
                mockIngredient,
                mockIngredient,
            ],
            cookingMethod:
                "Sauté guanciale until golden. Mix hot cooked pasta vigorously with the guanciale, egg, cheese and a splash of pasta cooking water and watch as it transforms into a luxurious, creamy sauce.",
        },
        inShop: false,
        isLike: false,
    },
];

export const modernProperRecipes: RecipeCardProps[] = [
    {
        recipe: {
            id: "1",
            title: "Spaghetti Carbonara",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700,636",
            listName: "Italian Classics",
            ownerAvatar:
                "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186122.jpg?semt=ais_items_boosted&w=740",
            duration: 30,
            price: 12.99,
            prepTime: 15,
            features: ["Kid Friendly", "Gluten Free", "Low Carb"],
            ingredients: [
                mockIngredient,
                mockIngredient,
                mockIngredient,
                mockIngredient,
            ],
            cookingMethod:
                "Sauté guanciale until golden. Mix hot cooked pasta vigorously with the guanciale, egg, cheese and a splash of pasta cooking water and watch as it transforms into a luxurious, creamy sauce.",
        },
        inShop: false,
        isLike: true,
    },
    {
        recipe: {
            id: "2",
            title: "Spaghetti Carbonara",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700,636",
            listName: "Italian Classics",
            ownerAvatar:
                "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186122.jpg?semt=ais_items_boosted&w=740",
            duration: 30,
            price: 12.99,
            prepTime: 15,
            features: ["Kid Friendly", "Gluten Free", "Low Carb"],
            ingredients: [
                mockIngredient,
                mockIngredient,
                mockIngredient,
                mockIngredient,
            ],
            cookingMethod:
                "Sauté guanciale until golden. Mix hot cooked pasta vigorously with the guanciale, egg, cheese and a splash of pasta cooking water and watch as it transforms into a luxurious, creamy sauce.",
        },
        inShop: false,
        isLike: false,
    },
    {
        recipe: {
            id: "3",
            title: "Spaghetti Carbonara",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700,636",
            listName: "Italian Classics",
            ownerAvatar:
                "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186122.jpg?semt=ais_items_boosted&w=740",
            duration: 30,
            price: 12.99,
            prepTime: 15,
            features: ["Kid Friendly", "Gluten Free", "Low Carb"],
            ingredients: [
                mockIngredient,
                mockIngredient,
                mockIngredient,
                mockIngredient,
            ],
            cookingMethod:
                "Sauté guanciale until golden. Mix hot cooked pasta vigorously with the guanciale, egg, cheese and a splash of pasta cooking water and watch as it transforms into a luxurious, creamy sauce.",
        },
        inShop: false,
        isLike: false,
    },
];

export const selectedModernProperUser: SelectedModernProperProps = {
    id: "1",
    avatarUrl:
        "data:image/jpeg;base64,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",
};
