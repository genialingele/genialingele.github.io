import PropTypes from 'prop-types';

function SkillPill(props) {
    return (
        <>
            <a href="https://github.com/genialingele" className={props.skillClass} target="_blank">{props.skillName}</a>             
        </>
    );
}

SkillPill.propTypes = {
    skillClass: PropTypes.string.isRequired,
    skillName: PropTypes.string,
};

export default SkillPill;
