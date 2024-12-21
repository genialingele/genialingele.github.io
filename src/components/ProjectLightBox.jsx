import PropTypes from "prop-types"

function ProjectLightBox(props) {
    const getStatusClass = (status) => {
        if (status == 'Live') return 'pillPositive';
        if (status == 'Coming soon') return 'pill';
        if (status == 'In development') return 'pill';
        if (status == 'Inactive') return 'pillNegative';
        return '';
    }

    return (
        <>
            <div className="projectLightBox">

                <section>
                    <h3>{props.project.title}</h3>
                    <p><em>{props.project.description}</em></p>

                    <p><span className="fa fa-calendar"></span> <strong>{props.project.year}</strong></p>

                    <p><span className="fa fa-cubes"></span> Tech Stack </p>

                    {
                        props.project.techstack.map((stack, id) => (
                            <span key={id} className="pill"> {stack}</span>
                        ))
                    }
                    <br></br>  <br></br>

                    <a href={props.project.links[0]} target="_blank">
                       <strong><span className="fa fa-html5"></span> Live Demo</strong> </a>
                    <br></br>

                    <a href={props.project.links[1]} target="_blank"> <span className="fa fa-github">
                    </span><strong> Source Code</strong></a>

                    <p>Category
                        <br></br>
                        {
                            props.project.category.map((category, id) => (
                                <span key={id} className="pill">#<strong>{category}</strong>  </span>)
                            )
                        }


                    </p>

                    <p> {
                        props.project.additional_info && <span><span className="fa fa-info-circle"></span>
                            {props.project.additional_info}</span>
                    }</p>
                    <hr></hr>

                    <p className={getStatusClass(props.project.status)}>{props.project.status}</p>
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