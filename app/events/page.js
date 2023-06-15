import getEvents from '@/lib/getEvents';

export default async function Events() {
  const events = await getEvents();
  return (
    <section className="events">
      {events.map((event) => {
        const { time, _id, date, address, topic } = event;
        return (
          <div className="event-card" key={_id}>
            <div className="date">
              <p>{date}</p>
            </div>
            <p className="topic">{topic}</p>
            <div className="timing">
              <p className="time">{time}</p>
              <p className="address">{address}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
