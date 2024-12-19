

function ProjectsMenu(){
    const handleClick = (e) => {
        console.log(e);

    }
    return(
        <>

        <div className="projectsMenu">
            <button href="#" onClick={()=> {handleClick("All")}}>All <span className="fa fa-sort"></span> </button>
            <a href="#">Featured <span className="fa fa-sort"></span></a>
            <a href="#">Websites <span className="fa fa-sort"></span></a>
            <a href="#">Utility <span className="fa fa-sort"></span></a>
            <a href="#">Fullstack <span className="fa fa-sort"></span></a> 
            <a href="#">Games <span className="fa fa-sort"></span></a>            
        </div>

        </>

    );



}


export default ProjectsMenu;