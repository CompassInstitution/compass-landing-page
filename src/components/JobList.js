// Matthew 
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Card from './Card';
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

const exampleJobList = {
    title: "Job Listing",
    date: "1/9/2022",
    description: "Apply for this job!",
    rsvpLink: "www.applyhere.com",
    itemId: "exJbId",
};

jobLists.push(exampleJobList);

const exampleJobList2 = {
    title: "Job Listing 2",
    date: "1/10/2022",
    description: "Apply for this job!",
    rsvpLink: "www.applyhere.com",
    itemId: "exJbId2",
};

jobLists.push(exampleJobList2);

const exampleJobList3 = {
    title: "Job Listing 3",
    date: "1/11/2022",
    description: "Apply for this job!",
    rsvpLink: "www.applyhere.com",
    itemId: "exJbId3",
};

jobLists.push(exampleJobList3);

const exampleJobList4 = {
    title: "Job Listing 4",
    date: "1/11/2022",
    description: "Apply for this job!",
    rsvpLink: "www.applyhere.com",
    itemId: "exJbId4",
};

jobLists.push(exampleJobList4);
