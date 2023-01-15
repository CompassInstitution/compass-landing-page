export default function Events({ title, date, description, rsvpLink, itemId }) {
    return (
        <div className="px-3">
            <div className="container items-stretch py-3 rounded-3xl bg-gradient-to-tr from-gray-100 to-sky-100 w-80">
                <div className="font-sans" itemID={itemId} key={itemId}>
                    <h1 className=" font-semibold text-2xl">{title}</h1>
                    <div>{description}</div>
                    <div>{date}</div>
                </div>
            </div>
        </div>
    );
}