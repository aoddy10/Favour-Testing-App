import axiosInstance from "@/hooks/useAxios";

// Fetch all recipes from the API.
export const fetchRecipes = async () => {
    const response = await axiosInstance.get("/recipes");
    return response.data;
};

// Fetch favorite recipes from the API.
export const fetchFavoriteRecipes = async () => {
    const response = await axiosInstance.get("/recipes?type=favorites");
    return response.data;
};

// Fetch modern proper recipes from the API.
export const fetchModernProperRecipes = async () => {
    const response = await axiosInstance.get("/recipes?type=modern-proper");
    return response.data;
};
