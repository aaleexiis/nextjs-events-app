import {Fragment} from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import {getFeaturedEvents, getEventById, getAllEvents} from "../../utils/api";

function EventDetailsPage(props) {
    const event = props.event;
    if (!event) {
        return (
            <div className='center'><p>Loading...</p></div>
        );
    }

    return (
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics event={event}/>
            <EventContent><p>{event.description}</p></EventContent>
        </Fragment>
    );
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const ids = events.map(event => {
        return {params: {eventId: event.id}}
    });

    return {
        paths: ids,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const {params} = context;

    const event = await getEventById(params.eventId);

    return {
        props: {
            event
        },
        revalidate: 30
    }
}

export default EventDetailsPage;
