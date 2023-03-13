import {useRouter} from "next/router";
import {Fragment} from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import ErrorAlert from "../../components/ui/error-alert";
import {getAllEvents} from "../../utils/api";

function AllEventsPage(props) {
    const router = useRouter();
    const events = props.events;

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

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events
        },
        revalidate: 30
    }
}

export default AllEventsPage;
