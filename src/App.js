import React from 'react';
import {Route} from 'react-router-dom';
import Newspage from './pages/Newspage';

const App = () => {
  return <Route path="/:category?" component={Newspage} />;
};

export default App;