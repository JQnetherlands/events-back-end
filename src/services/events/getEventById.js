import eventsData from "../../data/events.json" with { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const getEventById = (id) => {
    const event = eventsData.events.find((e) => e.id === id);

    if (!event) {
        throw new NotFoundError("event", id)
    } else {
        return event
    }
}

export default getEventById