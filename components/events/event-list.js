import EventListItem from "./event-list-item";
import classes from './event-list.module.css';

function EventList(props) {
    const {events} = props;

    return (
        <ul className={classes.list}>
            {events.map(event => <EventListItem key={event.id} event={event}/>)}
        </ul>
    );
}

export default EventList;