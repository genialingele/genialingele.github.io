import { useEffect } from "react";
import PropTypes from "prop-types";

function HeaderTrans() {
    const handleClick = (page) => {
        const targetElement = document.getElementById(page);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        console.log(page);
    };

    const changeBG = () => {
        const menu = document.querySelector('.menu2');
        const buttonsMenu = menu.querySelectorAll('button');
        const avatar = document.querySelector('.two_equal_columns_gradient'); // Assuming the avatar div has a class 'avatar'
        if (avatar && window.scrollY > avatar.offsetHeight) {


            buttonsMenu.forEach(button => {
                button.style.fontSize = '0.7em';
                button.style.padding = '5px 5px';
                
            });
            menu.style.backgroundColor = 'var(--light-colour)';
            menu.style.padding = '5px 0';
            menu.style.margin = '0px 0';

            
            menu.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        } else {
            menu.style.backgroundColor = 'transparent';
            menu.style.padding = '20px 0';
            menu.style.boxShadow = 'none';

            buttonsMenu.forEach(button => {
                button.style.fontSize = '';
                button.style.padding = '';
                
            });

        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBG);
        return () => {
            window.removeEventListener('scroll', changeBG);
        };
    }, []);

    return (
        <>
            {/* MENU */}
            <div className="menu2">
                
                <button onClick={() => handleClick("home")}>Home</button>
                <button onClick={() => handleClick("projectsPage")}>Projects</button>
                <button onClick={() => handleClick("experience")}>Experience</button>
                <button onClick={() => handleClick("articles")}>Articles</button>
                <button onClick={() => handleClick("contact")}>Contact</button>
            </div>
        </>
    );
}

HeaderTrans.propTypes = {
    margin : PropTypes.string,
    float : PropTypes.string,
}

export default HeaderTrans;