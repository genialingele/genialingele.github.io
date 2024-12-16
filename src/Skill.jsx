import PropTypes from 'prop-types';

function Skill(props) {
    return (
        <>
            <a href="https://github.com/genialingele" className={props.skillClass} target="_blank">{props.skillName}</a>             
        </>
    );
}

Skill.propTypes = {
    skillClass: PropTypes.string.isRequired,
    skillName: PropTypes.string,
};

export default Skill;
