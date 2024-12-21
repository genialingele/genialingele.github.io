import ArticleCard from "./ArticleCard";
import data from "../data.json";

function Articles() {
    const handleClick = (e, link) => {
        e.preventDefault();
        window.open(link, "_blank");
    };

    return (
        <>
            <div className="two_equal_columns" id="articles">
                <section>
                    <h2>My Articles and Resources</h2>
                    {
                        data.articles.map((article, id) => (
                            <div key={id} onClick={(e) => handleClick(e, article.link)} style={{ cursor: 'pointer' }}>
                                <ArticleCard articles={article} />
                            </div>
                        ))
                    }
                </section>

                <section>
                    <h2>My Certifications</h2>
                    <div className="certs">
                    {
                        data.certs_img.map((cert, id) => (
                            <img title={cert.title} alt={cert.title} key={id} src={cert.url}></img>

                        ))
                    }
                    
                    </div>

                </section>

            </div>

        </>
    );
}


export default Articles;