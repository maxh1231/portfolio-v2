const Projects = () => {
    return (
        <section id="projects" className="flex flex-col w-[800px] m-auto mt-72">
            <div>
                <h3 className="text-4xl text-left text-blue-white"><span>03. </span>Projects</h3>
            </div>

            <div>
                <div className="flex flex-row text-right">
                    <div>
                        image
                    </div>
                    <div className="flex flex-col">
                        <div className="text-4xl text-blue-white">Type++</div>
                        <div className="text-xl">
                            This project was developed in the MERN stack. A gamified typing tester, this application can be used simply to test your typing speed, or take it to the next level with achievements, levels, and badges. Built with several packages including graphQL, JWT (JSON WEB Token), Tailwind, ChartJS and more.
                        </div>
                        <div className="text-lg">
                            <span className="mr-4">React.js</span>
                            <span className=""> MongoDB</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row text-left">
                    <div>
                        <div className="text-4xl text-blue-white">Turtle</div>
                        <div className="text-xl" >
                            Inspiried by the popular game Wordle. Turtle is a daily word guesser. With multiple modes, play once a day or as much as you'd like. Built in the MERN stack, utilizing Tailwind, PassportJS, graphQl, and more.
                        </div>
                        <div className="text-lg">
                            <span className="">React.js</span>
                            <span className="ml-4"> MongoDB</span>
                        </div>
                    </div>
                    <div>
                        image
                    </div>
                </div>

                <div className="flex flex-row text-right">
                    <div>
                        image
                    </div>
                    <div>
                        <div className="text-4xl text-blue-white">#1Fan</div>
                        <div className="text-xl">
                            Music application for lovers of music. Create an account and favorite your top artists and albums, viewable from your customizable dashboard. Built with Express, mySQL, Tailwind and more.
                        </div>
                        <div className="text-lg">
                            <span className="mr-4">HandlebarsJS</span>
                            <span className=""> mySQL</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects;