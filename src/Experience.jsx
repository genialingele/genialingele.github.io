import ExperienceCard from "./ExperienceCard";

import SkillsGroup from "./SkillsGroup";

const work_history = [
    {
        "years": "2023 — 2024",
        "role": "IT Consultant",
        "employer": "Rosvin (pty) ltd",
        "duties": [
            "Automated processes using Python and other methods.",
            "Resolved IT related issues.",
            "Reports generation and maintenance.",
            "Contributed to improving corporate identity.",
        ]
    },
    {
        "years": "2018 — 2022",
        "role": "Managing Director",
        "employer": "Ndolena Design",
        "duties": [
            " Developed websites (using WordPress, HTML, CSS, JS, PHP, etc.)",
            " Developed standard operating procedures",
            " Drafted annual and monthly budget",
            " Research on innovative marketing techniques",
            " Increased revenues by 25%."
        ]
    },
    {
        "years": "2017 — 2018",
        "role": "Technology Officer",
        "employer": "AZ Business Services",
        "duties": [
           "Maintaining and managing technology solutions.",
           "IT Project Management duties.",
           "Increased work efficiency by 40%"
        ]
    }

];


function Experience() {
    return (
        <>
            <div className="two_equal_columns" id="experience">
                <section>
                    <h2>Experience</h2>

                    {
                        work_history.map((experience, id) =>( 
                            <ExperienceCard key={id} work_history={experience} />))
                    }

                </section>

                <section>
                    <h2>Skills</h2>
                    <SkillsGroup />



                </section>



            </div>



        </>


    );

}

export default Experience;