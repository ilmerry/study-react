import React from 'react';
import { useLocation, useParams } from '../../node_modules/react-router/index';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = ({ match }) => {
  const category = match || 'all';
  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
