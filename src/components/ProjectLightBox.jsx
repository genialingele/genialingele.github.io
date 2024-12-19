import PropTypes from "prop-types"

function ProjectLightBox(props) {

    return (
        <>
            <div className="projectLightBox">

                <section>
                    <h3>{props.project.title}</h3>
                    <p>{props.project.description}</p>

                    <p>{props.project.year}</p>

                    <p>{props.project.techstack}</p>

                    <p>{props.project.links}</p>

                    <p><img src={props.project.image}
                        alt={props.project.title}
                        title={props.project.title} /></p>
                    <p>{props.project.category}</p>

                    <p>{props.project.additional_info}</p>

                    <p>{props.project.status}</p>
                </section>

                <section>
                    <img src="/images/big_wide_placeholder.png"></img>


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