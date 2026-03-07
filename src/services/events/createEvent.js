import eventsData from "../../data/events.json" with { type: "json" };
import { v4 as uui } from "uuid";

const creatEvent = (createdBy, title, description, image, categoryIds, location, startTime, endTime) => { 
    const newEvent = {
        id: uui(),
        createdBy,
        title,
        description,
        image,
        categoryIds,
        location,
        startTime,
        endTime
    }

    eventsData.events.push(newEvent);
    
    return newEvent

 };

export default creatEvent