import {MapPinIcon, CalendarIcon} from "@heroicons/react/24/outline";
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';

function EventLogistics(props) {
    const {event} = props;

    const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const addressText = event.location.replace(', ', '\n');

    return (
        <section className={classes.logistics}>
            <div className={classes.image}>
                <img src={`/${event.image}`} alt={event.title}/>
            </div>
            <ul className={classes.list}>
                <LogisticsItem icon={CalendarIcon}>
                    <time>{humanReadableDate}</time>
                </LogisticsItem>
                <LogisticsItem icon={MapPinIcon}>
                    <address>{addressText}</address>
                </LogisticsItem>
            </ul>
        </section>
    );
}

export default EventLogistics;
