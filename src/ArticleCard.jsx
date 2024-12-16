import PropTypes from 'prop-types'

function ArticleCard(props) {
    return (<>
        <div className="experienceCard">
            <section>
                
                <p>{props.articles.year}</p>

            </section>

            <section>
            <p><strong>{props.articles.title}. </strong> </p>
            <a href="#">Link : {props.articles.link}</a>

            </section>

        </div>


    </>);
}

// Add PropTypes validation
ArticleCard.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired, 
            year: PropTypes.string.isRequired, 
            link: PropTypes.string.isRequired, 
            map : PropTypes.function,
        })
    ).isRequired,
};


export default ArticleCard;