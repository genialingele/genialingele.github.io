import Avatar from "./Avatar";
import HeaderTrans from "./HeaderTrans";
import data from "../data.json";


function Profile() {

    return (
        <>
            <HeaderTrans />

            <div className="two_equal_columns_gradient" onScroll={console.log("scrolling")} id="home">

                <section>
                    <Avatar />
                </section>
               
                <section>
                    <h1>Genial Ingele </h1>
                    <h2><em> Software Developer. <br></br> Cyber Security Analyst. </em></h2>

                    <div className="skillPill">
                        {
                            data.icons.map((icon, id) => {
                                return (
                                    <span key={id} ><img src={icon.url} alt={icon.name} width={20} /> {icon.name} </span>
                                    
                                );
                            })
                        }


                         </div>
                    <p> Nice to meet you! 
                        <br></br>
                    I am a business-minded, cybersecurity-minded, full stack developer who uses 
                        <br></br> creativity  and logic to resolve real world problems.</p>

                    <div className="social_media_icons">

                        <a href="https://github.com/genialingele" className="fa fa-github" target="_blank"></a>
                        <a href="https://twitter.com/GenialIngele" className="fa fa-twitter" target="_blank"></a>
                        <a href="https://www.linkedin.com/in/genial-ingele/" className="fa fa-linkedin" target="_blank"></a>
                        <a href="mailto:genial@ndolena.com" className="fa fa-envelope" target="_blank"> genial@ndolena.com</a>

                    </div>

                </section>





            </div>


        </>


    );
}

export default Profile;