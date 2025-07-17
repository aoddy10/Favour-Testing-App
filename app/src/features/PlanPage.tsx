import Button from "@/components/ui/Button";
import { useState } from "react";

type ListTypeProps = "Quick Pick" | "All Recipes";

function PlanPage() {
    const [selected, setSelected] = useState<ListTypeProps>("Quick Pick");

    return (
        <div className="flex  flex-col gap-2">
            <h1 className="text-3xl mt-6">Let's Plan</h1>

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
        </div>
    );
}

export default PlanPage;
