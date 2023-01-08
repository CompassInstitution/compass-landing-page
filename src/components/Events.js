// Reese
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Card from "./Card";
import HorizontalScroll from "./HorizontalScroll";

const events = [];

export default function Events() {
  return (
    <div className="items-center container text-center pt-5">
      <h1 className="font-semibold text-2xl ">Upcoming Events</h1>
      <div div className="sticky font-sans items-center">
        {HorizontalScroll(events.map((event) => Card(event)))}
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
