import {getAllEvents} from '../../data/dummy-data';
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import {Fragment} from "react";
import {useRouter} from "next/router";
import ErrorAlert from "../../components/ui/error-alert";

function AllEventsPage() {
    const router = useRouter();
    const events = getAllEvents();

    function findEventsHandler(year, month) {
        const path = `events/${year}/${month}`;
        router.push(path);
    }

    if (!events || events.length <= 0) {
        return (
            <ErrorAlert><p>No events found!</p></ErrorAlert>
        );
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList events={events}/>
        </Fragment>
    );
}

export default AllEventsPage;
