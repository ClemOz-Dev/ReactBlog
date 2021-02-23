import React from 'react';
import PropTypes from 'prop-types';
// nettoyage du code avec DOMPurify, pour sortir proprement le html
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';


function createMarkup(content) {
  return {
    __html: DOMPurify.sanitize(content),
  };
}

const Post = ({ title, category, excerpt, slug }) => (
  <Link to={`/post/${slug}`} className="post">
    <article >
      <h2 className="post-title">{title}</h2>
      <div className="post-category">{category}</div>
      <p className="post-excerpt" dangerouslySetInnerHTML={createMarkup(excerpt)} />
    </article>
  </Link>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
