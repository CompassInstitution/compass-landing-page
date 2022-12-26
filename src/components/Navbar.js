export default function Navbar() {
    return (
        <nav className="sticky top-0 w-full border border-b-1 z-50">
            <div className="container max-w-5xl">
                <div className="flex flex-row py-1 items-center font-serif">
                    <div className="basis-1/2">
                        logo
                    </div>
                    <div className="basis-1/2">
                        icons
                    </div>
                </div>
            </div>
        </nav>
    );
}