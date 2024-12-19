const coding_languages = [
    { "name": "PHP", "level": "Professional" },
    { "name": "Python", "level": "Intermediate" },
    { "name": "HTML, CSS, JavaScript", "level": "Intermediate" },
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
    { "name": "Tkinter, Flask, Pandas", "level": "Intermediate" },
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
                <ul>
                    {
                        coding_languages.map((lang, id) => (
                            <li key={id}>{lang.name} </li>)

                        )}
                </ul>

                <h4>Frameworks</h4>
                <ul>
                    {
                        frameworks.map((framework, id) => (
                            <li key={id}>{framework.name}</li>)

                        )}

                </ul>


                <h4>Tools</h4>
                <ul>
                    {
                        tools.map((tool, id) => (
                            <li key={id}>{tool.name}</li>)
                        )}
                </ul>

                <h4>Spoken languages</h4>
                <ul>
                    {
                        spoken_languages.map((lang, id) => (
                            <li key={id}>{lang.name}: {lang.level}</li>
                        ))
                    }
                </ul>




            </div>






        </>



    );

}


export default SkillsGroup;