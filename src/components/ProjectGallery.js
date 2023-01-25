// Niklas
// import { ScrollMenu } from "react-horizontal-scrolling-menu";
// import Card from './Card';
// import HorizontalScroll from "./HorizontalScroll";


// const projects = [];

// export default function ProjectGallery() {
//     return (
//         <div className="items-center container text-center p-10">
//             <h1 className="font-semibold text-2xl ">Projects</h1>
//             <div div className="sticky font-sans items-center">
//                 {HorizontalScroll(projects.map((event) => Card(event)))}
//             </div>
//         </div>
//     );
// }


// const exampleProject = {
//     title: "Project",
//     description: "Check out this project!",
//     rsvpLink: "www.example.com",
//     itemId: "exEvId",
// };

// projects.push(exampleProject);

// const exampleProject2 = {
//     title: "Project2",
//     description: "Check out this other project!",
//     rsvpLink: "www.example2.com",
//     itemID: "exEv2Id",
// };

// projects.push(exampleProject2);

// const exampleProject3 = {
//     title: "Project3",
//     description: "Check out this other other project!",
//     rsvpLink: "www.example3.com",
//     itemID: "exEv3Id",
// };

// projects.push(exampleProject3);

// const exampleProject4 = {
//     title: "Project4",
//     description: "Check out this last project!",
//     rsvpLink: "www.example4.com",
//     itemId: "exEv4Id",
// };

// projects.push(exampleProject4);

export default function ProjectGallery() {
    return (
        <div className="items-center container text-center p-10">
            <div className="flex container items-center pb-5">
                <h1 className=" font-sans font-semibold text-5xl pr-5">What we're working on </h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-610">
                    <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
                </svg>

            </div>
            <div className="flex items-start container rounded">
                <div className="rounded-xl bg-gradient-to-tr from-gray-100 to-orange-100 font-sans font-semibold text-2xl p-5 basis-1/2 shadow-lg">
                    <h1>Local Project</h1>
                    <div className="pt-5 px-5">
                        <p className=" font-normal text-lg text-left p-2">
                            We are using climate, financial, and satellite data to predict famine in affected regions. We are conducting data-driven research to develop an intimate understanding of agricultural supply chains and their markets. Our learnings power in-house mathematical models which help us draw practical utility from our data. 
                        </p>
                    </div>
                    <h2 className="text-2xl pt-8 pb-5">
                        Roadmap
                    </h2>
                    <div className="rounded-xl bg-gradient-to-tr from-white to-slate-100 container shadow-inner">
                        <p className="font-normal text-lg px-5">
                            text text text
                            <div className=" py-20">
                            </div>
                        </p>
                    </div>
                </div>
                <div className="rounded-xl bg-gradient-to-tr from-gray-100 to-sky-100 font-sans font-semibold text-2xl p-5 basis-1/2 shadow-lg">
                    <h1>Global Project</h1>
                    <p className=" font-normal text-lg pt-5 px-5 text-left">
                        We are using climate, financial, and satellite data to predict famine in affected regions. We are conducting data-driven research to develop an intimate understanding of agricultural supply chains and their markets. Our learnings power in-house mathematical models which help us draw practical utility from our data. 
                    </p>
                    <h2 className="text-2xl pt-8 pb-5">
                        Roadmap
                    </h2>
                    <div className="rounded-xl bg-gradient-to-tr from-white to-slate-100 container shadow-inner">
                        <p className="font-normal text-lg px-5">
                            text text text
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectCard(title, description) {
    return (
        <div className="rounded bg-black font-sans font-semibold text-2xl">
            <h1>title</h1>
        </div>
    )
}