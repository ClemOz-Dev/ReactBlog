import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ categories }) => {

  return (
    // il faudra boucler sur les catégories de data/categories
    <nav className="header">
      {categories.map((category)=>(
        <a key={category.label} href={category.route}>{category.label}</a>
      ))}
    </nav>
  );
 
};

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({      
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};



export default Header;
