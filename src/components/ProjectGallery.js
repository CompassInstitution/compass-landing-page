// Niklas
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Card from './Card';


const projects = [];

export default function ProjectGallery() {
    return (
        <div className="items-center container text-center pt-5">
            <h1 className="font-semibold text-2xl ">Projects</h1>
            <div div className="sticky font-sans items-center">
                <ScrollMenu>{projects.map((event) => Card(event))}</ScrollMenu>
            </div>
        </div>
    );
}


const exampleProject = {
    title: "Project",
    description: "Check out this project!",
    rsvpLink: "www.example.com",
    itemId: "exEvId",
};

projects.push(exampleProject);

const exampleProject2 = {
    title: "Project2",
    description: "Check out this other project!",
    rsvpLink: "www.example2.com",
    itemID: "exEv2Id",
};

projects.push(exampleProject2);

const exampleProject3 = {
    title: "Proejct3",
    description: "Check out this other other project!",
    rsvpLink: "www.example3.com",
    itemID: "exEv3Id",
};

projects.push(exampleProject3);