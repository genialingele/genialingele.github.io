import PropTypes from 'prop-types'

function ProjectCard(props) {

    return (
        <>
            <div className="projectCard">
                <section>
                <img src="images/projectCardPlaceHolder.png"></img>
                </section>
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

        })
    ).isRequired,
};

export default ProjectCard