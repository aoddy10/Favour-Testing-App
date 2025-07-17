import { useState } from "react";

// import components
import SearchBox from "@/components/SearchBox";
import Button from "@/components/ui/Button";

type ListTypeProps = "Quick Pick" | "All Recipes";

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
        </div>
    );
}

export default PlanPage;
