import eventsData from "../../data/events.json" with { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const deleteEvent = (id) => { 
    const eventIndex = eventsData.events.findIndex((e) => e.id === id)

    if (eventIndex === -1) {
        throw new NotFoundError("event", id);
    }

    const [deletedEvent] = eventsData.events.splice(eventIndex, 1);

    return deletedEvent
};
 
export default deleteEvent