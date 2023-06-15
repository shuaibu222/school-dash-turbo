import getEvents from '@/lib/getEvents';

export default async function Events() {
  const events = await getEvents();
  return (
    <section className="events">
      {events.map((event) => {
        const { time, _id } = event;
        return <p key={_id}>{time}</p>;
      })}
    </section>
  );
}
