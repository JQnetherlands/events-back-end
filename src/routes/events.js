import express from "express";
import getEvents from "../services/events/getEvents.js";
import createEvent from "../services/events/createEvent.js";
import getEventById from "../services/events/getEventById.js";
import updateEvent from "../services/events/updateEvent.js";
import deleteEvent from "../services/events/deleteEvent.js";
import authMiddleware from "../middleware/auth.js";
import NotFoundErrorHandler from "../middleware/notFoundErrorHandler.js";

const router = express.Router();

router.get("/", (req, res) => {
  const { title } = req.query;
  const events = getEvents(title);
  return res.status(200).json(events);
});

router.post("/", authMiddleware, (req, res) => {
  const {
    createdBy,
    title,
    description,
    image,
    categoryIds,
    location,
    startTime,
    endTime,
  } = req.body;

  const newEvent = createEvent(
    createdBy,
    title,
    description,
    image,
    categoryIds,
    location,
    startTime,
    endTime
  );
  res.status(201).json(newEvent);
});

router.get(
  "/:id",
  (req, res) => {
    const { id } = req.params;
    const event = getEventById(id);

    return res.status(200).json(event);
  },
  NotFoundErrorHandler
);

router.put(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
      const {
        createdBy,
        title,
        description,
        image,
        categoryIds,
        location,
        startTime,
        endTime,
      } = req.body;
      const updatedEvent = updateEvent(
        id,
        createdBy,
        title,
        description,
        image,
        categoryIds,
        location,
        startTime,
        endTime
      );

      res.status(200).json({
        message: `Event with id ${id} was updated`,
        updatedEvent,
      });
  },
  NotFoundErrorHandler
);

router.delete(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
      const event = deleteEvent(id);
      res.status(200).json({
        message: `Event with id ${event.id} was deleted successfully`,
        event,
      });
  },
  NotFoundErrorHandler
);

export default router;
