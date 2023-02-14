// Reese
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import EventCard from "./EventCard";
import HorizontalScroll from "./HorizontalScroll";
import { HiCalendar } from "react-icons/hi";

const events = [];

export default function Events() {
  return (
    <div className="items-center container text-center p-10">
      <div className="flex container items-center">
        <h1 className="font-semibold text-5xl py-10 pr-5">Upcoming Events</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10"
        >
          <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          <path
            fillRule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="items-center container text-center flex">
        <div div className="sticky font-sans items-center">
          {HorizontalScroll(events.map((event) => EventCard(event)))}
        </div>
      </div>
    </div>
  );
}

const exampleEvent = {
  title: "Global Project Meeting",
  date: "1/9/2022",
  description: "Attend our example event!",
  rsvpLink: "https://forms.gle/c83bkSwLVUXjBhw77",
  itemId: "exEvId",
};

events.push(exampleEvent);

const exampleEvent2 = {
  title: "Example2",
  date: "1/10/2022",
  description: "Attend this second example event!",
  rsvpLink: "https://forms.gle/c83bkSwLVUXjBhw77",
  itemID: "exEv2Id",
};

events.push(exampleEvent2);
