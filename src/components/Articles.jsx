import ArticleCard from "./ArticleCard";
import data from "../data.json"

function Articles() {

    return (
        <>
            <div className="two_equal_columns" id="articles">
                <section>
                    <h2>My Articles and Resources</h2>

                    {
                        data.articles.map((article, id) => (
                            <ArticleCard key={id} articles={article} />)
                        )
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