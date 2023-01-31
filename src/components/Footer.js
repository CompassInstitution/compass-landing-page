// Tony
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <p className="text-sm md:mr-10">&copy; {new Date().getFullYear()} My Website</p>
                <nav className="flex">
                    <a className="text-sm px-4 hover:text-gray-400" href="#">About</a>
                    <a className="text-sm px-4 hover:text-gray-400" href="#">Services</a>
                    <a className="text-sm px-4 hover:text-gray-400" href="#">Contact</a>
                </nav>
            </div>
        </footer>
    );
}