import { useState } from 'react'

const Experience = () => {
    const [currentJob, setCurrentJob] = useState(0)

    const renderJob = () => {
        if (currentJob === 0) {
            return (
                <div>
                    <div>
                        <h2>Claims Analyst</h2>
                    </div>
                    <p>Investigate customer reported fraud to determine a responsible and appropriate decision. Navigate multiple systems efficiently to assist in the determination process.</p>
                </div>
            )
        }

        if (currentJob === 1) {
            return (
                <div>
                    <div>
                        <h2>Tutor & Grader</h2>
                    </div>
                    <p>Tutor students that request additional assistance in categories of University of Utah's Full Stack Coding Bootcamp.</p>
                </div>
            )
        }

        if (currentJob === 2) {
            return (
                <div>
                    <div>
                        <h2>Property Insurance Agent</h2>
                    </div>
                    <p>Licensed property insurance agent in 46 states. Assist customers to enroll in Auto, Home and Renters insurance. Service policies by making adjustments per customer requests.</p>
                </div>
            )
        }

        if (currentJob === 3) {
            return (
                <div>
                    <div>
                        <h2>Account Manager</h2>
                    </div>
                    <p>Spoke with a multitude of customers with varying circumstances. Providing great customer service to find the best solutions for each individual while maintaining high performance metrics.</p>
                </div>
            )
        }
    }

    const jobHandler = (event) => {
        if (event.target.id === 'bofa') {
            setCurrentJob(0)
            console.log(event.target.children)
        }

        if (event.target.id === '2u') {
            setCurrentJob(1)
        }

        if (event.target.id === 'tp') {
            setCurrentJob(2)
        }

        if (event.target.id === 'dfs') {
            setCurrentJob(3)
        }
    }

    return (
        <section className='flex'>
            <div>
                <div id='bofa' onClick={jobHandler}>
                    <span id='bofa' onClick={jobHandler}>Teletech Inc.</span>
                </div>

                <div id='2u' onClick={jobHandler}>
                    <span id='2u' onClick={jobHandler}>2U Inc.</span>
                </div>
                <div id='tp' onClick={jobHandler}>
                    <span id='tp' onClick={jobHandler}>Teleperformance</span>
                </div>
                <div id='dfs' onClick={jobHandler}>
                    <span id='dfs' onClick={jobHandler}>Discover</span>
                </div>
            </div>
            {renderJob()}
            <div>

            </div>
        </section>
    )
}

export default Experience;