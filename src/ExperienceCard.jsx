import PropTypes from 'prop-types'

function ExperienceCard(props) {
    return (<>
        <div className="experienceCard">
            <section>
                
                <p>{props.work_history.years}</p>

            </section>

            <section>
            <p><strong>{props.work_history.role} at {props.work_history.employer}. </strong> </p>
            <ul>
                {
                        props.work_history.duties.map((duty, id) => (
                            <li key={id}>{duty}</li>
                        ))
                }

            </ul>
            </section>

        </div>


    </>);
}

// Add PropTypes validation
ExperienceCard.propTypes = {
    work_history: PropTypes.arrayOf(
        PropTypes.shape({
            years: PropTypes.string.isRequired, 
            role: PropTypes.string.isRequired, 
            employer: PropTypes.string.isRequired, 
            duties: PropTypes.arrayOf(PropTypes.string).isRequired,
            map : PropTypes.function,
        })
    ).isRequired,
};

export default ExperienceCard;