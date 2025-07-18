import { Search } from "lucide-react";

type SearchBoxProps = {
    placeholder?: string;
    searchText: string;
    setSearchText: (value: string) => void;
};

function SearchBox({
    placeholder = "Search Ingredients, Recipe",
    searchText,
    setSearchText,
}: SearchBoxProps) {
    return (
        <div className="flex items-center bg-gray-200 rounded-full px-4 py-2">
            <Search className="text-gray-500 mr-2" />
            <input
                type="text"
                placeholder={placeholder}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm w-full"
            />
        </div>
    );
}

export default SearchBox;
