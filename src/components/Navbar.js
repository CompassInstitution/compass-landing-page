import logo from './images/compass-logo.svg'

export default function Navbar() {
    return (
        <nav className="sticky top-0 w-full border-b-1 z-50 pb-5 pt-3 bg-white shadow-sm">
            <div className="container">
                <div className="flex flex-row py-1 items-center font-snas">
                    <div className="basis-1/3 flex items-center">
                        <img src={logo} alt="Logo" width={250} />
                    </div>
                    <button className="basis-1/6">
                        ABOUT
                    </button>
                    <button className="basis-1/6">
                        EVENTS
                    </button>
                    <button className="basis-1/6">
                        PROJECTS
                    </button>
                    <button className="basis-1/6">
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