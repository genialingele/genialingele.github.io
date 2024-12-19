import ExperienceCard from "./ExperienceCard";

import SkillsGroup from "./SkillsGroup";

import  data from "../data.json";


function Experience() {
    return (
        <>
            <div className="two_equal_columns" id="experience">
                <section>
                    <h2>Experience</h2>
                    {
                        data.experience.map((experience, id) =>(
                            <ExperienceCard key={id} work_history={experience}/>
                        )
                    )
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