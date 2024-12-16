import Avatar from "./Avatar";
import HeaderTrans from "./HeaderTrans";
import Skill from "./Skill";


function Profile() {

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            <link rel="icon" type="image/x-icon" href="/img/Genial Ingele logo main bw trans_Plan de travail 1.png" />

            <div className="two_equal_columns">

                <section>
                    <Avatar />
                </section>

                <section>
                    <HeaderTrans />

                    <h1>Genial Ingele
                        <br></br>
                        <em> Software Developer. </em>
                    </h1>
                    <div className="skill">
                    <Skill skillClass="devicon-python-plain"/>                        
                    <Skill skillClass="devicon-react-plain"/>
                    <Skill skillClass="devicon-php-plain"/>
                    <Skill skillClass="devicon-java-plain"/>
                    </div>
                
                    <h3>Hi there. Nice to meet you!</h3>
                    <p>I am a business minded, full stack developer who uses <br></br> creativity  and logic to resolve real world problems.</p>

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