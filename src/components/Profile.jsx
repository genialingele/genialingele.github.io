import Avatar from "./Avatar";
import SkillPill from "./SkillPill";
import HeaderTrans from "./HeaderTrans";


function Profile() {

    return (
        <>
            <HeaderTrans/>

            <div className="two_equal_columns_gradient" onScroll={console.log("scrolling")}>

                <section>
                    <Avatar />
                </section>
               
                <section>
                    <h1>Genial Ingele </h1>
                    <h2><em> Software Developer. </em></h2>
                    
                    <div className="skill">
                    <SkillPill skillClass="devicon-php-plain" skillName="PHP"/>                     
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