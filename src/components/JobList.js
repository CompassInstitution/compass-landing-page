// Matthew
import Card from "./Card";
import HorizontalScroll from "./HorizontalScroll";

const applicationLink = "https://docs.google.com/forms/d/e/1FAIpQLScc3bGFP6uV8Hki20BW1XQq4m1i6-W06qNpg-9eg2mic5Co0A/viewform?usp=sf_link";

const jobLists = [
  {
    title: "Videographer",
    description: "Apply for this job!",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },

  {
    title: "Software Engineer",
    description: "Apply for this job!",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },

  {
    title: "Data Scientist",
    description: "Apply for this job!",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },

  {
    title: "Modeling Engineer",
    description: "Apply for this job!",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },

  {
    title: "Photographer",
    description: "Apply for this job!",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },

  {
    title: "Director of Communications",
    description: "Apply for this job!",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },

  {
    title: "Community Manager",
    description: "Apply for this job!",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },

  {
    title: "Outreach Coordinator",
    description: "Apply for this job!",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },
  
];

export default function JobLists() {
  return (
    <div className="items-center container text-center pt-5">
      <h1 className="font-semibold text-2xl ">Job Listings</h1>
      <div div className="sticky font-sans items-center">
        {HorizontalScroll(jobLists.map((jobLists) => Card(jobLists)))}
      </div>
    </div>
  );
}
