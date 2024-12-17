import ArticleCard from "./ArticleCard"

const articles = [
    {
        "title": " 5 Tips to stay safe online",
        "year": "18 Oct 2024",
        "link": "www.youtube.com/genial-ingele",
        "type": "ARTICLE",
    },
    {
        "title": "The internet archive is down",
        "year": "18 Jan 2022",
        "link": "www.youtube.com/genial-ingele",
        "type" : "VIDEO"
    }, 
    {
        "title": "How to build an HTML website",
        "year": "18 Jan 2022",
        "link": "www.linkedin.com/genial-ingele",
        "type" : "E-BOOK"
    }, 
    {
        "title": "How to build an HTML website",
        "year": "18 Jan 2022",
        "link": "www.linkedin.com/genial-ingele",
        "type" : "ARTICLE"
    },
    {
        "title": "How to build an HTML website",
        "year": "18 Jan 2022",
        "link": "www.linkedin.com/genial-ingele",
        "type" : "ARTICLE"
    },

];


function Articles() {

    return (
        <>
            <div className="two_equal_columns" id="articles">
                <section>
                    <h2>My Articles and Resources</h2>
                    {
                        articles.map((article, id) => (
                            <ArticleCard articles={article} key={id} />
                        ))

                    }

                </section>

                <section>
                    <img src="src\assets\genialIngele_hs4.jpg" width="50%"></img>

                </section>

            </div>

        </>
    );
}


export default Articles;