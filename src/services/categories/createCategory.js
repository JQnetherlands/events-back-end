import categoryData from "../../data/categories.json" with { type: "json" };
import { v4 as uuid } from "uuid";

const createCategory = (name) => {
    const newcategory = {
        id: uuid(),
        name,
    }

    categoryData.categories.push(newcategory)

    return newcategory
}

export default createCategory;