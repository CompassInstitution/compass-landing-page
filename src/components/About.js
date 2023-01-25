import roundLogo from './images/compass_logo_secondary.svg'

// Matteo
export default function About() {
    return (
        <div className="flex items-center container py-10 rounded-3xl bg-gradient-to-tr from-gray-100 to-sky-100 shadow-lg">
            <div className="sticky font-sans p-10">
                <div className="flex">
                    <h1 className="font-semibold text-5xl">
                        Mathematical Modeling for <span className="inline text-sky-900 text-opacity-70">Social Good</span>
                    </h1>
                    {/* <h1 className="font-bold text-5xl pl-0 text-sky-900">
                         Social Good
                    </h1> */}
                </div>
                
                <h2 className="text-3xl">
                    @ UC San Diego
                </h2>
                <p className="text-lg font-sans pt-5">
                    We're a student run organization partnering with local and international organizations to amplify their impact through mathematics, computer science, and data science.
                </p>
            </div>
            <div className="basis-5/6 container flex justify-center blur-sm hover:blur-0">
                <img className=" opacity-10 " src={roundLogo} alt="" width={350} />
            </div>
        </div>
    );
}