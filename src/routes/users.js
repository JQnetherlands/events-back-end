import express from "express";
import getUsers from "../services/users/getUsers.js";
import getUserById from "../services/users/getUserById.js";
import createUser from "../services/users/createUser.js";
import updateUserById from "../services/users/updateUserById.js";
import deleteUser from "../services/users/deleteUser.js";
import authMiddleware from "../middleware/auth.js";
import NotFoundErrorHandler from "../middleware/notFoundErrorHandler.js";

const router = express.Router();

router.get("/", (req, res) => {
  const { name } = req.query;
  const users = getUsers(name);

  res.status(200).json(users);
});

router.get(
  "/:id",
  (req, res) => {
    const { id } = req.params;

    const user = getUserById(id);

    res.status(200).json(user);
  },
  NotFoundErrorHandler
);

router.post("/", authMiddleware, (req, res) => {
  const { username, password, name, image } = req.body;
  const newUser = createUser(username, password, name, image);

  res.status(201).json(newUser);
});

router.put(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const { username, password, name, image } = req.body;

    const updatedUser = updateUserById(id, username, password, name, image);
    res.status(200).json({
      message: `Usert with id ${id} was updated`,
      updatedUser,
    });
  },
  NotFoundErrorHandler
);

router.delete(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;

    const deletedUser = deleteUser(id);
    res.status(200).json({
      message: `User with id ${deletedUser.id} was deleted successfully`,
      deletedUser,
    });
  },
  NotFoundErrorHandler
);

export default router;
