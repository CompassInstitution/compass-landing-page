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
        <div className="container items-stretch p-3 rounded-3xl bg-gradient-to-tr shadow-lg hover:shadow-xl text-gray-100 py-5 bg-gradient-to-tr from-slate-600 to-slate-700">
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
