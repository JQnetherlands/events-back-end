import eventsData from "../../data/events.json" with { type: "json" }
import NotFoundError from "../../errors/NotFoundError.js";

const updateEvent = (id, createdBy, title, description, image, categoryIds, location, startTime, endTime) => { 
    const eventIndex = eventsData.events.findIndex((e) => e.id === id);

    if (eventIndex === -1) { 
        throw new NotFoundError("event", id);
    }
    
    const event = eventsData.events[eventIndex];

    event.title = title ?? event.title
    event.description = description ?? event.description
    event.image = image ?? event.image;
    event.categoryIds = categoryIds ?? event.categoryIds;
    event.location = location ?? event.location;
    event.startTime = startTime ?? event.startTime;
    event.endTime = endTime ?? event.endTime;
    event.createdBy = createdBy ?? event.createdBy


    return event

};
 
export default updateEvent