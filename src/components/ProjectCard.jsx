import PropTypes from 'prop-types';

function ProjectCard(props) {
    const getStatusClass = (status) => {
        if (status == 'Live') return 'pillPositive';
        if (status == 'Coming soon') return 'pill';
        if (status == 'In development') return 'pill';
        if (status == 'Inactive') return 'pillNegative';
        return '';
    };

    return (
        <>
            <div className="projectCard">
                <div className="projectCardImage">
                    <img src={props.projects.image[0]} alt={props.projects.title} title={props.projects.title} />
                </div>
                
                <section>
                    <h3>{props.projects.title}</h3>
                    <p>{props.projects.description}</p>
                    <p className={getStatusClass(props.projects.status)}>{props.projects.status}</p>
                </section>
            </div>
        </>
    );
}

ProjectCard.propTypes = {
    projects: PropTypes.shape({
        title: PropTypes.string.isRequired, 
        description: PropTypes.string.isRequired,
        image: PropTypes.arrayOf(PropTypes.string.isRequired),
        status: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;