import getEvents from '@/lib/getEvents';

export default async function Events() {
  const events = await getEvents();
  return (
    <section className="events-section">
      {events.map((event) => {
        const { time, _id, date, address, title } = event;
        const minimizeDateWords = date.slice(0, 3);
        const dateNum = date.slice(-2, date.length);
        return (
          <div className="event-card" key={_id}>
            <div className="date">
              <h1 className="date-letter">{minimizeDateWords}</h1>
              <p className="date-num">{dateNum}</p>
            </div>
            <p className="topic">{title}</p>
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
