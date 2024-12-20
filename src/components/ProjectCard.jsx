import PropTypes from 'prop-types'

function ProjectCard(props) {

    return (
        <>
            <div className="projectCard">
                <div>

                { <img src={props.projects.image[0]} alt={props.projects.title} title={props.projects.title} /> }
                </div>
                
                <section>
                <h3>{props.projects.title }</h3>
                <p>{props.projects.description }</p>
                </section>

            </div>
        </>

    );

}

ProjectCard.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired, 
            description: PropTypes.string.isRequired,
            image: PropTypes.arrayOf(PropTypes.string.isRequired),
        })
    ).isRequired,
};

export default ProjectCard;