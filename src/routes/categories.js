import getCategories from "../services/categories/getCategories.js";
import createCategory from "../services/categories/createCategory.js";
import getCategoryById from "../services/categories/getCategoryById.js";
import updateCategory from "../services/categories/updateCategory.js";
import deleteCategory from "../services/categories/deleteCategory.js";
import authMiddleware from "../middleware/auth.js";
import express from "express";
import NotFoundErrorHandler from "../middleware/notFoundErrorHandler.js";

const router = express.Router();

router.get("/", (req, res) => {
  const categories = getCategories();
  res.status(200).json(categories);
});

router.post("/", authMiddleware, (req, res) => {
  const { name } = req.body;
  const category = createCategory(name);
  res.status(201).json(category);
});

router.get(
  "/:id",
  (req, res) => {
    const { id } = req.params;
    const category = getCategoryById(id);

    res.status(200).json(category);
  },
  NotFoundErrorHandler
);

router.put(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const category = updateCategory(id, name);
    res.status(200).json({
      message: `Category with id ${category.id} was successfully updated`,
      category,
    });
  },
  NotFoundErrorHandler
);

router.delete(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const deletedCategory = deleteCategory(id);
    res.status(200).json({
      message: `Category with id ${deletedCategory.id} was successfully deleted`,
      deletedCategory,
    });
  },
  NotFoundErrorHandler
);

export default router;
