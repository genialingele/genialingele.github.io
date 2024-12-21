const coding_languages = [
    { "name": "PHP", "level": "Professional" },
    { "name": "Python", "level": "Intermediate" },
    { "name": "HTML, CSS, JS", "level": "Intermediate" },
    { "name": "Java", "level": "Beginner" },
    { "name": "SQL", "level": "Professional" },
    { "name": "C#, C++", "level": "Beginner" },
];


const spoken_languages = [
    { "name": "English", "level": "Professional" },
    { "name": "French", "level": "Native" },
    { "name": "Lingala", "level": "Native" },

];

const frameworks = [
    { "name": "React", "level": "Intermediate" },
    { "name": "Laravel", "level": "Beginner" },
    { "name": ".NET", "level": "Beginner" },
    { "name": "Tkinter", "level": "Intermediate" },
    { "name": "Flask", "level": "Beginner" },
    { "name": "Pandas", "level": "Beginner" },
    { "name": "Bootstrap", "level": "Professional" },
    { "name": "Node.Js", "level": "Beginner" },

];

const tools = [
    { "name": "WordPress", "level": "Expert" },
    { "name": "Azure", "level": "Beginner" },
    { "name": "AWS", "level": "Intermediate" },
    { "name": "Adobe Suite", "level": "Expert" },
    { "name": "GitHub", "level": "Intermediate" },
    { "name": "Suricata, Maltego, Nmap", "level": "Beginner" },
    { "name": "Splunk", "level": "Beginner" },
];


function SkillsGroup() {
    return (
        <>

            <div>

                <h4>Programming Languages</h4>
                <div className="pillContainer">
                    {
                        coding_languages.map((lang, id) => (
                            <span key={id} className="pill">{lang.name} </span>)
                        )}

                </div>

                <h4>Frameworks</h4>

                <div className="pillContainer">
                    {
                        frameworks.map((framework, id) => (
                            <span key={id} className="pillPositive">{framework.name}</span>
                        ))
                    }
                </div>


                <h4>Tools</h4>
                <div className="pillContainer">

                    {
                        tools.map((tool, id) => (
                            <span key={id} className="pill">{tool.name}</span>)
                        )}
                </div>


                <h4>Spoken languages</h4>
                <div className="pillContainer">
                    {
                        spoken_languages.map((lang, id) => (
                            <span key={id} className="pillPositive">{lang.name}: {lang.level}</span>
                        ))
                    }
                </div>

            </div>

        </>

    );

}


export default SkillsGroup;