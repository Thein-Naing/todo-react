import React from 'react'
import PropTypes from 'prop-types';

const Button = ({text, color, onClick}) => {
  return (
    <button onClick={onClick}
    style= {{ background: color}}
    className='btn'
    >{text}</button>
  )
}

Button.defaultProps = {
  color:"steelblue",
 }


 Button.propTypes = {
   title: PropTypes.string,
   color: PropTypes.string,
   onClick: PropTypes.func,
 }

export default Button;
