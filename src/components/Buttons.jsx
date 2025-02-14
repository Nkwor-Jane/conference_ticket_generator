import PropTypes from "prop-types"

const Buttons = ({label, onClick, className}) => {
  return (
    <div className="md:flex block">
        <button onClick={onClick} className={` rounded cursor-pointer ${className}`}>
          {label}
        </button>
    </div>
  )
}
Buttons.propTypes = {
    label: PropTypes.any, 
    onClick: PropTypes.any, 
    className: PropTypes.any,
}


export default Buttons