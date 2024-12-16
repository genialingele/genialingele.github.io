import ExperienceCard from "./ExperienceCard";
import SkillPill from "./SkillPill";


function Experience(){
    return(
        <>
        <div className="two_equal_columns" id="projects">
            <section>
                <h2>Experience</h2>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </section>

            <section>
                <h2>Skills</h2>
                <SkillPill/>



            </section>



        </div>
        
        
        
        </>


    );

}

export default Experience;