export default function EventCard({
  title,
  date,
  description,
  rsvpLink,
  itemId,
}) {
  return (
    <a href={rsvpLink} target="_blank">
      <div className="px-3 py-8">
        <div className="container items-stretch p-3 rounded-3xl bg-gradient-to-tr ring-offset-1 ring-4 ring-red-900 ring-opacity-20 shadow-lg hover:shadow-xl">
          <div className="font-sans" itemID={itemId} key={itemId}>
            <h1 className=" font-semibold text-2xl">{title}</h1>
            <div>{description}</div>
            <div>{date}</div>
          </div>
        </div>
      </div>
    </a>
  );
}
