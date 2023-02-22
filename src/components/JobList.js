// Matthew
import HorizontalScroll from "./HorizontalScroll";

const applicationLink = "https://docs.google.com/forms/d/e/1FAIpQLScc3bGFP6uV8Hki20BW1XQq4m1i6-W06qNpg-9eg2mic5Co0A/viewform?usp=sf_link";

const jobLists = [
  {
    title: "Videographer",
    description: "The Videographer is responsible for capturing high-quality video content for a variety of projects. Apply for this job to become a part of our team and help bring our projects to life through stunning visuals.",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },

  {
    title: "Software Engineer",
    description: "The Software Engineer is responsible for designing, developing, and maintaining software applications. Apply for this job to join our dynamic software development team and help build innovative solutions for our clients.",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },

  {
    title: "Data Scientist",
    description: "The Data Scientist is responsible for collecting, analyzing, and interpreting large amounts of data to extract valuable insights. Apply for this job to join our data science team and help us make data-driven decisions that drive our business forward.",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },

  {
    title: "Modeling Engineer",
    description: "The Modeling Engineer is responsible for creating and maintaining mathematical models to support various engineering applications. Apply for this job to join our engineering team and help us design and optimize complex systems through mathematical modeling.",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },

  {
    title: "Photographer",
    description: "The Photographer is responsible for capturing high-quality photos for a variety of projects. Apply for this job to join our creative team and help us showcase the beauty and essence of our projects through stunning photography.",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },

  {
    title: "Director of Communications",
    description: "The Director of Communications is responsible for overseeing all internal and external communication efforts for the organization. Apply for this job to join our communications team and help us effectively communicate our vision and mission to the world.",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },

  {
    title: "Community Manager",
    description: "The Community Manager is responsible for fostering and maintaining relationships with the organization's community members. Apply for this job to join our community management team and help us build strong relationships with our community and keep them engaged and informed.",
    rsvpLink: applicationLink,
    itemId: "exJbId",
  },

  {
    title: "Outreach Coordinator",
    description: "The Outreach Coordinator is responsible for planning and executing outreach activities to promote the organization's programs and initiatives. Apply for this job to join our outreach team and help us connect with new audiences and promote our mission and programs to the world.",
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


function Card({ title, description, rsvpLink, itemId }) {
  return (
      <a href={rsvpLink} target="_blank">
          <div className="p-3 text-white">
              <div className="container items-stretch py-5 rounded-3xl bg-gradient-to-tr from-slate-700 to-slate-800 w-80 shadow-lg hover:shadow-xl">
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
