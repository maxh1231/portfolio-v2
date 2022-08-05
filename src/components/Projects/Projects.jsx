import no1fan from '../../assets/no1fan.JPG'
import turtle from '../../assets/turtle.JPG'
import typeplusplus from '../../assets/type++.JPG'
import github from '../../assets/github.svg'
import exlink from '../../assets/external-link.svg'

const Projects = () => {
    return (
        <section id="projects" className="flex flex-col w-[150px] xs:w-[300px] sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] mx-auto  mt-72 xl:mx-42 z-[2]">
            <div>
                <h3 className="text-2xl md:text-4xl text-left text-blue-white mb-24"><span className="text-lg md:text-xl text-light-blue">03. </span>Projects <span className="relative hidden sm:inline top-6 left-4 text-dark-blue border-t border-grey">___________________</span></h3>
            </div>

            <div>
                <div className="flex flex-col lg:flex-row text-right mb-16 items-center">
                    <div className=" main rounded-md ">
                        <div className="hidden lg:block overlay rounded-md ">
                            <a href="https://typeplusplus.herokuapp.com/" target="_blank" rel="noreferrer">
                                <img src={typeplusplus} alt="Type++ project" className='rounded-md'></img>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="relative lg:right-40 text-2xl md:text-4xl text-blue-white my-4">Type++</div>
                        <a href="https://typeplusplus.herokuapp.com/" target="blank" className=''>
                            <div className="relative lg:right-40 top-0 w-[150px] xs:w-[300px] md:w-[600px] text-base text-grey bg-dark-blue-bg p-7 rounded-lg bg-dark-blue-bg">
                                This project was developed in the MERN stack. A gamified typing tester, this application can be used simply to test your typing speed, or take it to the next level with achievements, levels, and badges. Built with several packages including graphQL, JWT (JSON WEB Token), Tailwind, ChartJS and more.
                            </div>
                        </a>
                        <div className="flex flex-row-reverse items-center relative lg:right-40 top-2 text-lg">
                            <span className="text-grey ml-4">React.js</span>
                            <span className="text-grey ml-4"> MongoDB</span>
                            <a href='https://github.com/maxh1231/type-Plus-Plus' target="_blank" rel="noreferrer">
                                <img src={github} alt="github logo" className='ml-4 github w-[32px] h-[32px]' />
                            </a>
                            <a href='https://typeplusplus.herokuapp.com/' target="_blank" rel="noreferrer">
                                <img src={exlink} alt="github logo" className='github w-[32px] h-[32px]' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row text-left mb-16 items-center">
                    <div>
                        <div className="relative lg:left-40 text-2xl md:text-4xl text-blue-white my-4">Turtle</div>
                        <a href="https://wurtle.herokuapp.com/" target="_blank" rel="noreferrer" className="">
                            <div className="relative lg:left-40 w-[150px] xs:w-[300px] md:w-[600px] text-base text-grey bg-dark-blue-bg p-7 rounded-lg z-50" >
                                Inspiried by the popular game Wordle. Turtle is a daily word guesser. With multiple modes, play once a day or as much as you'd like. Built in the MERN stack, utilizing Tailwind, PassportJS, graphQl, and more.
                            </div>
                        </a>
                        <div className="flex tems-center lg:pl-40 relative top-2 text-lg">
                            <span className="text-grey mr-4">React.js</span>
                            <span className="text-grey mr-4"> MongoDB</span>
                            <a href='https://github.com/maxh1231/turtle' target="_blank" rel="noreferrer">
                                <img src={github} alt="github logo" className='mr-4 github w-[32px] h-[32px]' />
                            </a>
                            <a href='https://wurtle.herokuapp.com/' target="_blank" rel="noreferrer">
                                <img src={exlink} alt="github logo" className='github w-[32px] h-[32px]' />
                            </a>
                        </div>
                    </div>
                    <div className='main rounded-md'>
                        <div className="hidden lg:block overlay rounded-md">
                            <a href="https://wurtle.herokuapp.com/" target="_blank" rel="noreferrer">
                                <img src={turtle} alt="Turtle project" className='rounded-md'></img>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row text-right mb-8 items-center">
                    <div className='main rounded-md'>
                        <div className="hidden lg:block overlay rounded-md">
                            <a href="https://onlybands.herokuapp.com/" target="_blank" rel="noreferrer">
                                <img src={no1fan} alt="No. 1 Fan project" className=' rounded-md'></img>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="relative lg:right-40 text-2xl md:text-4xl text-blue-white my-4">#1Fan</div>
                        <a href="https://onlybands.herokuapp.com/" target="_blank" rel="noreferrer" className="">
                            <div className="relative lg:right-40 w-[150px] xs:w-[300px] md:w-[600px] text-base text-grey bg-dark-blue-bg p-7 rounded-lg">
                                Music application for lovers of music. Create an account and favorite your top artists and albums, viewable from your customizable dashboard. Built with Express, mySQL, Tailwind and more.
                            </div>
                        </a>
                        <div className="flex flex-row-reverse items-center relative lg:right-40 top-2 text-lg">
                            <span className="text-grey ml-4">HandlebarsJS</span>
                            <span className="text-grey ml-4"> mySQL</span>
                            <a href='https://github.com/maxh1231/no1fan' target="_blank" rel="noreferrer">
                                <img src={github} alt="github logo" className='ml-4 github w-[32px] h-[32px]' />
                            </a>
                            <a href='https://onlybands.herokuapp.com/' target="_blank" rel="noreferrer">
                                <img src={exlink} alt="github logo" className='github w-[32px] h-[32px]' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Projects;