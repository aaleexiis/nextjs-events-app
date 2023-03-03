import {getFeaturedEvents} from '../data/dummy-data';
import EventList from "../components/events/event-list";

function HomePage() {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <h1>Featured Events Page - Home Page</h1>
            <EventList events={featuredEvents}/>
        </div>
    );
}

export default HomePage;