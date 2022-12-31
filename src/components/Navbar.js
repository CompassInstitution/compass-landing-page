export default function Navbar() {
    return (
        <nav className="sticky top-0 w-full border border-b-1 z-50">
            <div className="container max-w-5xl">
                <div className="flex flex-row py-1 items-center font-serif">
                    <div className="basis-1/3">
                        logo
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
                    <button className="basis-1/3">
                        get involved
                    </button>
                </div>
            </div>
        </nav>
    );
}