import React from 'react';
import { Footer, Blog, Header, Features, Possibility, Gtp3 } from './containers';
import { Cta, Brand, Navbar} from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
          <Navbar />
          <Header />
      </div>
      <Brand />
      <Gtp3 />
    </div>
  );
}

export default App;
