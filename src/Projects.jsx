import ProjectsGroup from "./ProjectsGroup";
import ProjectsMenu from "./ProjectsMenu";

const projects = [
    {
        "title": "How to build an HTML website",
        "description": "Describe me",
        "year": "2022",
        //first link is always live demo. If not available then source code
        "links": ["www.linkedin.com/genial-ingele"],
        "image": [""],
        "techstack": [""],
        //One Project can have multiple categories but let's try to avoid that
        "category": ["Featured"],
        "additional_info": "More info about the project"
    },
    {
        "title": "How to build an HTML website",
        "description": "Describe me",
        "year": "2022",
        //first link is always live demo. If not available then source code
        "links": ["www.linkedin.com/genial-ingele"],
        "image": [""],
        "techstack": [""],
        //One Project can have multiple categories but let's try to avoid that
        "category": ["Featured"],
        "additional_info": "More info about the project"
    },
    {
        "title": "How to build an HTML website",
        "description": "Describe me",
        "year": "2022",
        //first link is always live demo. If not available then source code
        "links": ["www.linkedin.com/genial-ingele"],
        "image": [""],
        "techstack": [""],
        //One Project can have multiple categories but let's try to avoid that
        "category": ["Featured"],
        "additional_info": "More info about the project"
    },
    {
        "title": "How to build an HTML website",
        "description": "Describe me",
        "year": "2022",
        //first link is always live demo. If not available then source code
        "links": ["www.linkedin.com/genial-ingele"],
        "image": [""],
        "techstack": [""],
        //One Project can have multiple categories but let's try to avoid that
        "category": ["Featured"],
        "additional_info": "More info about the project"
    },
    {
        "title": "How to build an HTML website",
        "description": "Describe me",
        "year": "2022",
        //first link is always live demo. If not available then source code
        "links": ["www.linkedin.com/genial-ingele"],
        "image": [""],
        "techstack": [""],
        //One Project can have multiple categories but let's try to avoid that
        "category": ["Featured"],
        "additional_info": "More info about the project"
    },
    {
        "title": "How to build an HTML website",
        "description": "Describe me",
        "year": "2022",
        //first link is always live demo. If not available then source code
        "links": ["www.linkedin.com/genial-ingele"],
        "image": [""],
        "techstack": [""],
        //One Project can have multiple categories but let's try to avoid that
        "category": ["Featured"],
        "additional_info": "More info about the project"
    },
    {
        "title": "How to build an HTML website",
        "description": "Describe me",
        "year": "2022",
        //first link is always live demo. If not available then source code
        "links": ["www.linkedin.com/genial-ingele"],
        "image": [""],
        "techstack": [""],
        //One Project can have multiple categories but let's try to avoid that
        "category": ["Featured"],
        "additional_info": "More info about the project"
    },
];
//use map function 


function Projects() {


    return (
        <>

            <div className="projects">
                <h2>Projects </h2>
                <ProjectsMenu />
                <ProjectsGroup />
            </div>


        </>



    );
}

export default Projects;