import categoriesData from "../../data/categories.json" with { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const getCategoryById = (id) => {
    const category = categoriesData.categories.find((c) => c.id === id)

    if (!category) {
        throw new NotFoundError("category", id)
    } else {
        return category
    }

};
 
export default getCategoryById;
