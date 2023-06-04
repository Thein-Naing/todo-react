import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAdd, showAddedTask}) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button className='btn'
      color={showAddedTask ? 'gray' :'green'}
      text= {showAddedTask ? 'Close' :'Add'}
      onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
 title:" Todo List Today",
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Header;
