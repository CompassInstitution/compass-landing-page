export default function Card({ title, description, rsvpLink, itemId }) {
  return (
    <a href={rsvpLink} target="_blank">
      <div className="p-3">
        <div className="container items-stretch py-3 rounded-3xl bg-gradient-to-tr from-gray-100 to-sky-100 w-80 shadow-lg hover:shadow-xl">
          <div className="font-sans" itemID={itemId} key={itemId}>
            <h1 className=" font-semibold text-2xl">{title}</h1>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </a>
  );
}
