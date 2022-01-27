import React from 'react';
import About from './router-tutorial/About';
import Home from './router-tutorial/Home';
import { Link, Route, Routes } from '../node_modules/react-router-dom/index';
import Profile from './router-tutorial/Profile';
import Profiles from './router-tutorial/Profiles';
import HistorySample from './router-tutorial/HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/history" element={<HistorySample />} />
      </Routes>
    </div>
  );
};

export default App;
