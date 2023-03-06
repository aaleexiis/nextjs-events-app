import {getFeaturedEvents} from '../data/dummy-data';
import EventList from "../components/events/event-list";

function HomePage() {
    const featuredEvents = getFeaturedEvents();

    return (
        <EventList events={featuredEvents}/>
    );
}

export default HomePage;