import categoryData from "../../data/categories.json" with { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const deleteCategory = (id) => {
    const categoryIndex = categoryData.categories.findIndex((c) => c.id === id);
    
    if (categoryIndex === -1) {
        throw new NotFoundError("category", id);
    }

    const [deletedCategory] = categoryData.categories.splice(categoryIndex, 1);

    return deletedCategory
}

export default deleteCategory;
