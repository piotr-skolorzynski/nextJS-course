import Head from 'next/head';

import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import Comments from '../../components/input/comments';

const EventDetailPage = ({ selectedEvent }) => {
  if (!selectedEvent) {
    return (
      <div className='center'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{selectedEvent.title}</title>
        <meta name='description' content={selectedEvent.description} />
      </Head>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
      <Comments eventId={selectedEvent.id} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export default EventDetailPage;
