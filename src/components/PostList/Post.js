import React from 'react';
import PropTypes from 'prop-types';

// responsabilité : afficher une tâche
const Post = ({ title, category, excerpt }) => {
 
  return (
    <article className="post">
      <h1 className="title">{title}</h1>
      <h2 className="category">{category}</h2>
      <p className="content">{excerpt}</p>             
    </article>
  );
};

// Task.propTypes = {
//   id: PropTypes.number.isRequired,
//   label: PropTypes.string.isRequired,
//   done: PropTypes.bool.isRequired,
// };

export default Post;
