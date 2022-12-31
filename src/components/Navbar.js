export default function Navbar() {
    return (
        <nav className="sticky top-0 w-full border border-b-1 z-50">
            <div className="container">
                <div className="flex flex-row py-1 items-center font-serif">
                    <div className="basis-1/3">
                        <img src="logo192.png" alt="Logo" width="90" />
                    </div>
                    <button className="basis-1/6 basis-">
                        about
                    </button>
                    <button className="basis-1/6">
                        events
                    </button>
                    <button className="basis-1/6">
                        projects
                    </button>
                    <button className="basis-1/6">
                        jobs
                    </button>
                    <button className="basis-1/6 flex items-center rounded ">
                        <div className="w-9">
                        </div>
                        <div className="rounded ring-offset-2 ring-2 ring-black w-28 bg-slate-100">
                            get involved
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
}