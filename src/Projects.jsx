import ProjectsGroup from "./ProjectsGroup";
import ProjectsMenu from "./ProjectsMenu";


const articles =[
    {"title" : "How to build an HTML website",
        "year" : "2022",
        "link" : "www.linkedin.com/genial-ingele"
    },
    {"title" : "How to build an HTML website",
        "year" : "2022",
        "link" : "www.linkedin.com/genial-ingele"
    },    {"title" : "How to build an HTML website",
        "year" : "2022",
        "link" : "www.linkedin.com/genial-ingele"
    },    {"title" : "How to build an HTML website",
        "year" : "2022",
        "link" : "www.linkedin.com/genial-ingele"
    },

];
//use map function 
function Projects (){


    return(
        <>
        
        <div className="projects">
            <h2>Projects </h2>
            <ProjectsMenu/>
            <ProjectsGroup/>
        </div>
        
        
        </>



    );
}

export default Projects;