import EventItem from './event-item';

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <EventItem props={...item} />
      ))}
    </ul>
  );
};

export default EventList;
