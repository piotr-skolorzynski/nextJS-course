import Head from 'next/head';
import ErrorAlert from '../../components/events/error-alert';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import { getFilteredEvents } from '../../helpers/api-util';

const FilteredEventsPage = ({
  hasError,
  filteredEvents,
  date: { year, month },
}) => {
  const pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name='description' content={`All events for ${month}/${year}.`} />
    </Head>
  );

  if (!filteredEvents) {
    return (
      <>
        {pageHeadData}
        <p className='center'>Loading ...</p>;
      </>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );
  }

  if (hasError) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />;
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const filteredData = params.slug;

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = Number(filteredYear);
  const numMonth = Number(filteredMonth);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return { props: { hasError: true } }; // { notFound: true }; // or redirect to error page then return {redirect: {destination: '/error}}
  }
  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filteredEvents: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
};

export default FilteredEventsPage;
