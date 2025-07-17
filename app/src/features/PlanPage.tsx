import { useState } from "react";
import type { RecipeCard as RecipeCardProps } from "@/types/recipe";

// import components
import SearchBox from "@/components/SearchBox";
import Button from "@/components/ui/Button";
import YourFavoriteSection from "@/components/YourFavoriteSection";

type ListTypeProps = "Quick Pick" | "All Recipes";

// test data
const favoriteRecipes: RecipeCardProps[] = [
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
        },
        inShop: false,
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
        },
        inShop: true,
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
        },
        inShop: true,
    },
];

function PlanPage() {
    const [selected, setSelected] = useState<ListTypeProps>("Quick Pick");
    const [searchText, setSearchText] = useState("");

    return (
        <div className="flex  flex-col gap-4">
            <h1 className="text-3xl mt-6">Let's Plan</h1>

            {/* Plan type selection */}
            <div className="flex justify-evenly bg-gray-200 rounded-full">
                <Button
                    variant={
                        selected === "Quick Pick" ? "secondary" : "transparent"
                    }
                    size="md"
                    className="w-full"
                    onClick={() => setSelected("Quick Pick")}
                >
                    Quick Pick
                </Button>
                <Button
                    variant={
                        selected === "All Recipes" ? "secondary" : "transparent"
                    }
                    size="md"
                    className="w-full"
                    onClick={() => setSelected("All Recipes")}
                >
                    All Recipes
                </Button>
            </div>

            {/* Search box and more button */}
            <div className="flex gap-3">
                <div className="flex-1">
                    <SearchBox
                        placeholder="Search Ingredients, Recipes"
                        searchText={searchText}
                        setSearchText={setSearchText}
                    />
                </div>
                <Button variant="outline" size="sm" className="px-6">
                    More +
                </Button>
            </div>

            <YourFavoriteSection recipes={favoriteRecipes} />
        </div>
    );
}

export default PlanPage;
