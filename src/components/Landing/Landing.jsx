import avatar from '../../assets/avataaars.svg'

const Landing = () => {
    return (
        <section className="text-center flex flex-col md:flex-row md:text-left items-center h-screen justify-center w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] m-auto">
            <div className='md:w-[336px] lg:w-[536px]'>
                <div>
                    <p className="text-2xl md:text-4xl text-blue-white ">Hello,</p>
                </div>
                <div>
                    <p className="text-4xl md:text-6xl text-blue-white ">I build web applications</p>
                </div>
                <div>
                    <p className="text-xl md:text-4xl text-grey">
                        I'm a full stack web developer that builds and creates exceptional digital experiences.
                    </p>
                </div>
            </div>
            <div >
                {/* <Avatar
                    avatarStyle='Transparent'
                    topType='ShortHairShortWaved'
                    accessoriesType='Prescription02'
                    hairColor='BrownDark'
                    facialHairType='Blank'
                    clotheType='Hoodie'
                    clotheColor='Blue02'
                    eyeType='Happy'
                    eyebrowType='RaisedExcited'
                    mouthType='Smile'
                    skinColor='Light'
                /> */}
                <img src={avatar} alt="" />
            </div>
        </section>
    )
}

export default Landing;