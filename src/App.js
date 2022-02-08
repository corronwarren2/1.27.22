import React from 'react';
import './App.css';

import { Footer, Blog, Header, Features, Possibility, Gtp3 } from './containers';
import { Cta, Brand, Navbar} from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
          <Navbar />
          <Header />
      </div>
      <Brand />
      <Gtp3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
