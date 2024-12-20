import PropTypes from "prop-types"

function ProjectLightBox(props) {

    return (
        <>
            <div className="projectLightBox">

                <section>
                    <h3>{props.project.title}</h3>
                    <p><em>{props.project.description}</em></p>

                    <p><span className="fa fa-calendar"></span> <strong>{props.project.year}</strong></p>

                    <p><span className="fa fa-cubes"></span>Tech Stack <br></br>

                    {
                        props.project.techstack.map((stack, id) => (
                            <span key={id}> {stack}.</span>
                        ))
                    }
                    </p>

                    <a href={props.project.links[0]} target="_blank">
                        <span className="fa fa-html5"></span>Live Demo</a>
                    <br></br>

                    <a href={props.project.links[1]} target="_blank"> <span className="fa fa-github">
                    </span>Source Code</a>

                    <p>Category <br></br>
                    {
                    props.project.category.map((category, id) => (
                     <span key={id}>#<strong>{category}</strong>  </span> )
                    )
                }

                    
                    
                    </p>

                    <p> {
                        props.project.additional_info && <span><span className="fa fa-info-circle"></span> 
                        {props.project.additional_info}</span>
                    }</p>

                    <p>{props.project.status}</p>
                </section>

                <section>
                    {props.project.image &&

                    <img src={props.project.image}
                        alt={props.project.title}
                        title={props.project.title} />

                    }

                </section>



            </div>



        </>



    );

}



ProjectLightBox.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(PropTypes.string.isRequired),
        image: PropTypes.arrayOf(PropTypes.string.isRequired),
        techstack: PropTypes.arrayOf(PropTypes.string.isRequired),
        category: PropTypes.arrayOf(PropTypes.string.isRequired),
        additional_info: PropTypes.string.isRequired,
        status: PropTypes.arrayOf(PropTypes.string.isRequired),

    })


}

export default ProjectLightBox;