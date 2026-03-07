import eventsData from "../../data/events.json" with { type: "json" };

const getEvents = (title) => { 
    let events = eventsData.events;

    if (title) {
        events = events.filter((e) => e.title.toLowerCase() === title.toLowerCase())
    }
    
    return events
 };

export default getEvents;
