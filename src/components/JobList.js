// Matthew
import Card from "./Card";
import HorizontalScroll from "./HorizontalScroll";

const jobLists = [];

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

const applicationLink = "https://docs.google.com/forms/d/e/1FAIpQLScc3bGFP6uV8Hki20BW1XQq4m1i6-W06qNpg-9eg2mic5Co0A/viewform?usp=sf_link";

const exampleJobList = {
  title: "Videographer",
  date: "1/23/2023",
  description: "Apply for this job!",
  rsvpLink: applicationLink,
  itemId: "exJbId",
};

jobLists.push(exampleJobList);

const exampleJobList2 = {
  title: "Data Scientist",
  date: "1/23/2023",
  description: "Apply for this job!",
  rsvpLink: applicationLink,
  itemId: "exJbId2",
};

jobLists.push(exampleJobList2);

const exampleJobList3 = {
  title: "Software Engineer",
  date: "1/23/2023",
  description: "Apply for this job!",
  rsvpLink: applicationLink,
  itemId: "exJbId3",
};

jobLists.push(exampleJobList3);

const exampleJobList4 = {
  title: "Job Listing 4",
  date: "1/23/2023",
  description: "Apply for this job!",
  rsvpLink: applicationLink,
  itemId: "exJbId4",
};

jobLists.push(exampleJobList4);
