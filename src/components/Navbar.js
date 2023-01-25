import logo from './images/compass-logo.svg';


function refreshPage() {
    window.scrollTo(0, 0);
    window.location.reload(false);
    
}

function jumpToProjects() {
    window.scrollTo(0, 825);    
}

function jumpToEvents() {
    window.scrollTo(0, 500);    
}

const applicationLink = "https://docs.google.com/forms/d/e/1FAIpQLScc3bGFP6uV8Hki20BW1XQq4m1i6-W06qNpg-9eg2mic5Co0A/viewform?usp=sf_link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 w-full border-b-1 z-50 pb-5 pt-3 bg-white shadow-sm">
            <div className="container">
                <div className="flex flex-row py-1 items-center font-snas">
                    <div onClick={refreshPage} className="basis-1/3 flex items-center">
                        <img src={logo} alt="Logo" width={250} />
                    </div>
                    <button onClick={refreshPage} className="basis-1/6">
                        ABOUT
                    </button>
                    <button onClick={jumpToEvents} className="basis-1/6">
                        EVENTS
                    </button>
                    <button onClick={jumpToProjects} className="basis-1/6">
                        PROJECTS
                    </button>
                    <button onClick={() => window.open(applicationLink, '_blank', 'noreferrer')} className="basis-1/6">
                        JOIN US
                    </button>
                    <button className="basis-1/6 flex items-center rounded ">
                        <div className="w-9">
                        </div>
                        <div className="rounded ring-offset-2 ring-2 ring-sky-900 ring-opacity-70 w-28 bg-gradient-to-tr from-gray-100 to-sky-100">
                           SUPPORT US
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
}