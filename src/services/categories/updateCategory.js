import categoryData from "../../data/categories.json" with { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const updateCategory = (id, name) => { 
    const categoryIndex = categoryData.categories.findIndex((c) => c.id === id);

    if (categoryIndex === -1) {
        throw new NotFoundError("category", id);
    }

    const category = categoryData.categories[categoryIndex];

    category.name = name ?? category.name;

    return category
}
 
export default updateCategory;