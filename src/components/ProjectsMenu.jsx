

function ProjectsMenu(){
    const handleClick = (e) => {
        console.log(e);

    }
    return(
        <>

        <div className="projectsMenu">
            <button onClick={()=> {handleClick("All")}}>All <span className="fa fa-sort"></span> </button>
            <button onClick={()=> {handleClick("Featured")}}>Featured <span className="fa fa-sort"></span></button>
            <button onClick={()=> {handleClick("Websites")}}>Websites <span className="fa fa-sort"></span></button>
            <a href="#">Utility <span className="fa fa-sort"></span></a>
            <a href="#">Fullstack <span className="fa fa-sort"></span></a> 
            <a href="#">Games <span className="fa fa-sort"></span></a>            
        </div>

        </>

    );



}


export default ProjectsMenu;