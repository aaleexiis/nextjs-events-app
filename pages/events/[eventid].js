import {Fragment} from "react";
import {useRouter} from "next/router";
import ErrorAlert from "../../components/ui/error-alert";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import {getEventById} from '../../data/dummy-data';

function EventDetailsPage() {
    const router = useRouter();

    const {eventId} = router.query;
    const event = getEventById(eventId);

    if (!event) {
        return (
            <ErrorAlert><p>No event found!</p></ErrorAlert>
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

export default EventDetailsPage;
