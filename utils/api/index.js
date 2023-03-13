export async function getAllEvents() {
    const response = await fetch(
        "https://react-udemy-95ed9-default-rtdb.firebaseio.com/events.json",
    );

    const data = await response.json();

    return Object.keys(data).map(key => {
        return {
            id: key,
            ...data[key]
        }
    });
}

export async function getFeaturedEvents() {
    const events = await getAllEvents();
    return events.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
    const events = await getAllEvents();
    return events.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
    const {year, month} = dateFilter;
    const events = await getAllEvents();

    return events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
}