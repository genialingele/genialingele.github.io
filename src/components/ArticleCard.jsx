import PropTypes from 'prop-types';

function ArticleCard(props) {
    return (
        <>
            <div className="experienceCard">
                <section>
                    <p>{props.articles.year}</p>
                </section>
                <section>
                    <p><strong>{props.articles.title}</strong></p>
                    <a href={props.articles.link}><u><span className='fa bi-globe'> </span> <em>Read more about it.</em></u></a>
                </section>
            </div>
        </>
    );
}

// Add PropTypes validation
ArticleCard.propTypes = {
    articles: PropTypes.shape({
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
};

export default ArticleCard;