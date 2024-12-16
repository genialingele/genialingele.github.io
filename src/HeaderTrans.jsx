import PropTypes from "prop-types"

function HeaderTrans(props) {
    return(
        <>
        {/*MENU*/}
        <div className="menu2" style={{"margin-bottom": props.margin, "float":props.float}}>
            <a href="#">Home </a>
            <a href="#">Projects </a>
            <a href="#">Experience </a>
            <a href="#">Articles </a>
            <a href="#">Contact </a>            
        </div>
          
        
        </>


    );
    
}

HeaderTrans.propTypes = {
    margin : PropTypes.string,
    float : PropTypes.string,
}
export default HeaderTrans;