export default function EventCard({ title, date, description, rsvpLink, itemId }) {
    return (
        <div className="p-3">
            <div className="container items-stretch p-3 rounded-3xl bg-gradient-to-tr ring-offset-2 ring-2 ring-sky-900 ring-opacity-70">
                <div className="font-sans" itemID={itemId} key={itemId}>
                    <h1 className=" font-semibold text-2xl">{title}</h1>
                    <div>{description}</div>
                    <div>{date}</div>
                    <div>RSVP</div>
                </div>
            </div>
        </div>
    );
}