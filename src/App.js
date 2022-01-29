// newsapi password :: studyingreact9284
// API :: 4c858a1b67a747289b7d4d56bc82784a
import React, { useState, useCallback } from 'react';
import { Route, Routes, useParams } from '../node_modules/react-router/index';
import Categories from './news-app/Categories';
import NewsList from './news-app/NewsList';
import NewsPage from './news-app/NewsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} exact={true} />
      <Route path="/business" element={<NewsPage match={'business'} />} />
      <Route
        path="/entertainment"
        element={<NewsPage match={'entertainment'} />}
      />
      <Route path="/health" element={<NewsPage match={'health'} />} />
      <Route path="/science" element={<NewsPage match={'science'} />} />
      <Route path="/sports" element={<NewsPage match={'sports'} />} />
      <Route path="/technology" element={<NewsPage match={'technology'} />} />
    </Routes>
  );
};

export default App;
