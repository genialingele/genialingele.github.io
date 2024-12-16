import ArticleCard from "./ArticleCard"

const articles =[
    {"title" : "How to build an HTML website",
        "year" : "2022",
        "link" : "www.linkedin.com/genial-ingele"
    },
    {"title" : "How to build an HTML website",
        "year" : "2022",
        "link" : "www.linkedin.com/genial-ingele"
    },    {"title" : "How to build an HTML website",
        "year" : "2022",
        "link" : "www.linkedin.com/genial-ingele"
    },    {"title" : "How to build an HTML website",
        "year" : "2022",
        "link" : "www.linkedin.com/genial-ingele"
    },

];


function Articles(){

    return(
        <>
        <div className="two_equal_columns" id="articles">
            <section>
                <h2>My Articles and Resources</h2>
                {
                    articles.map((article, id ) => (
                        <ArticleCard articles={article} key={id}/>
                    ) )
                
                }

            </section>

            <section>
                <img src="src\assets\genialIngele_hs4.jpg" width="200px"></img>

            </section>
        
        </div>
        
        </>
    );
}


export default Articles;