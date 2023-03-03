import EventListItem from "./event-list-item";

function EventList(props) {
    const {events} = props;

    return (
        <ul>
            {events.map(event => <EventListItem key={event.id} event={event}/>)}
        </ul>
    );
}

export default EventList;