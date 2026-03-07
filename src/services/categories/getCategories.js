import categoriesData from "../../data/categories.json" with { type: "json" };

const getCategories = () => {
    const categories = categoriesData.categories;

    return categories
}

export default getCategories