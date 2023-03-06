import {useRouter} from "next/router";
import {getFilteredEvents} from '../../data/dummy-data'
import EventList from "../../components/events/event-list";
import {Fragment} from "react";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage() {
    const router = useRouter();

    const filterData = router.query.slug;

    if (!filterData) {
        return (
            <p className='center'>Loading....</p>
        );
    }

    if (filterData.length !== 2) {
        return (
            <Fragment>
                <ErrorAlert><p className='center'>Number of arguments is wrong! Please adjust your values!</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2020 || numMonth > 12 || numMonth < 1) {
        return (
            <Fragment>
                <ErrorAlert><p className='center'>Invalid filter. Please adjust your values!</p></ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const filteredEvents = getFilteredEvents({year: numYear, month: numMonth});

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert><p className='center'>No events found!</p></ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        );

    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <Fragment>
            <ResultsTitle date={date}/>
            <EventList events={filteredEvents}/>
        </Fragment>
    );

}

export default FilteredEventsPage;