import React from 'react';
import PropTypes from 'prop-types';
// bibliothèque qui permet d'assembler conditionnellement des classes CSS
// https://www.npmjs.com/package/classnames
// yarn add classnames
import Post from './Post';
import './postList.scss';

// responsabilité : afficher une tâche
const PostList = ({ posts }) => (
  <div className="posts">
    <h1 className='main-title'>DEV OF THRONES</h1>
    <div className="post-container">
      {posts.map((post) => (
        <Post key={post.id} title={post.title} category={post.category} excerpt={post.excerpt} />
      ))}
    </div>
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({     
      id: PropTypes.number.isRequired, 
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PostList;
