export const getAllEvents = async () => {
    const response = await fetch('https://data-for-events-app-nextjs-default-rtdb.europe-west1.firebasedatabase.app/events.json');
    const data = await response.json();
    const events = [];
    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        })
    }

    return events;
}

export const getFeaturedEvents = async () => {
    const allEvents = await getAllEvents();

    return allEvents.filter((event) => event.isFeatured);
}