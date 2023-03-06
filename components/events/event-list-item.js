import classes from './event-list-item.module.css';
import Button from "../ui/button";
import {CalendarIcon, MapPinIcon, ArrowRightIcon} from "@heroicons/react/24/outline";

function EventListItem(props) {
    const {event} = props;
    const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formattedAddress = event.location.replace(', ', `\n`);
    const exploreLink = `/events/${event.id}`;

    return (
        <li className={classes.item}>
            <img src={`/${event.image}`} alt={event.title}/>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{event.title}</h2>
                    <div className={classes.date}>
                        <CalendarIcon/>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <MapPinIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default EventListItem;