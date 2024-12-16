import Avatar from "./Avatar";
import SkillPill from "./SkillPill";
import HeaderTrans from "./HeaderTrans";


function Profile() {

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            <link rel="icon" type="image/x-icon" href="/img/Genial Ingele logo main bw trans_Plan de travail 1.png" />

            <div className="two_equal_columns_gradient">

                <section>
                    <Avatar />
                </section>
               
                <section>
                <HeaderTrans/>

                    <h1>Genial Ingele </h1>
                    <h2><em> Software Developer. </em></h2>
                    
                    <div className="skill">
                    <SkillPill skillClass="devicon-php-plain" skillName="PHP"/>
                    <SkillPill skillClass="devicon-python-plain" skillName="Python"/>                        
                    <SkillPill skillClass="devicon-react-plain" skillName="React"/>
                    <SkillPill skillClass="devicon-javascript-plain" skillName="JavaScript"/>
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