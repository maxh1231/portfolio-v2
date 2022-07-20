const Nav = () => {
    return (
        <header className="flex justify-between">
            <div>
                <span className="text-4xl text-light-blue">Max Humpherys</span>
            </div>

            <div>
                <ul className="flex flex-col md:flex-row items-start " >
                    <li>
                        <a href="#about" className="text-2xl md:pl-6 text-blue-white hover:text-light-blue"><span className="text-base text-light-blue">01. </span>About</a>
                    </li>
                    <li>
                        <a href="#exp" className="text-2xl md:pl-6 text-blue-white hover:text-light-blue"><span className="text-base text-light-blue">02. </span>Experience</a>
                    </li>
                    <li>
                        <a href="#projects" className="text-2xl md:pl-6 text-blue-white hover:text-light-blue"><span className="text-base text-light-blue">03. </span>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-2xl md:pl-6 md:pr-6 text-blue-white hover:text-light-blue"><span className="text-base text-light-blue">03. </span>Contact</a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/document/d/1S9RU3scZyjFcD91g1vVpjavVcvp9GqvFuitpEzQ5CCA/edit" target="_blank" className="text-2xl px-2 py-2 text-light-blue border-2 border-light-blue rounded-md hover:text-light-blue hover:bg-light-grey">Resume</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Nav;