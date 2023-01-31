export default function Card({ title, description, rsvpLink, itemId }) {
    return (
        <a href={rsvpLink} target="_blank">
            <div className="p-3">
                <div className="container items-stretch py-5 rounded-3xl bg-gradient-to-tr from-gray-100 to-sky-100 w-80 shadow-lg hover:shadow-xl">
                    <div className="font-sans" itemID={itemId} key={itemId}>
                        <h1 className=" font-semibold text-2xl">{title}</h1>
                        <hr className="my-3 border-gray-400 border-dashed" />
                        <div className="px-5 text-left">{description}</div>
                    </div>
                </div>
            </div>
        </a>
    );
}



