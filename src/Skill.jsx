import PropTypes from 'prop-types';

function Skill(props) {
    return (
        <>
            <a href="https://github.com/genialingele" className={props.skillClass} target="self"></a>             
        </>
    );
}

Skill.propTypes = {
    skillClass: PropTypes.string.isRequired,
};

export default Skill;
