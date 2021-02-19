// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import PostList from 'src/components/PostList';
import Footer from 'src/components/Footer';
// datas
import categories from 'src/data/categories';
import posts from 'src/data/posts';
// style
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header categories={categories}/>
    <PostList posts={posts}/>
    <Footer />
  </div>
);

// == Export
export default App;
