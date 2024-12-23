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
                    <div className="moreProfiles">
                        <h2>My other profiles </h2>
                        <a href="https://ingelegenial.myportfolio.com/" target="_blank" title="Behance profile for Graphic Designs">
                            <span className="fa fa-behance"></span> Behance</a>
                        <br></br>
                        <a href="https://soundcloud.com/genial-ingele" target="_blank" title="Soundcloud profile for Music Production">
                            <span className="fa fa-soundcloud"></span> SoundCloud</a>
                        <a href="https://www.artstation.com/genialingele" target="_blank" title="Artstation profile for Arts">
                        <br></br>
                            <span className="fa bi-wrench-adjustable-circle"></span> ArtStation</a>

                        

                    </div>

                </section>

            </div>

        </>
    );
}


export default Articles;