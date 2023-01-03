// Reese
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const events = [];

export default function Events() {
  return (
    <div className="flex items-center container  pt-5">
      <div div className="sticky font-serif ">
        <h1 className="font-extrabold text-3xl">Events</h1>
        <div>
          <ScrollMenu>{events.map((event) => EventCard(event))}</ScrollMenu>
        </div>
      </div>
    </div>
  );
}

function EventCard({ title, date, description, rsvpLink, itemId }) {
  return (
    <div
      style={{
        border: "1px solid",
        margin: "0 10px",
        width: "200px",
      }}
      itemID={itemId}
      key={itemId}
    >
      <div>
        <div>{date}</div>
        <div>{title}</div>
      </div>
      <div>
        <div>{description}</div>
      </div>
      <div>
        <a href={rsvpLink}>{rsvpLink}</a>
      </div>
    </div>
  );
}

const exampleEvent = {
  title: "Example",
  date: "1/9/2022",
  description: "Attend our example event!",
  rsvpLink: "www.example.com",
  itemId: "exEvId",
};

events.push(exampleEvent);

const exampleEvent2 = {
  title: "Example2",
  date: "1/10/2022",
  description: "Attend this second example event!",
  rsvpLink: "www.example2.com",
  itemID: "exEv2Id",
};

events.push(exampleEvent2);
