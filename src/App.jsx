import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Theme } from './Theme.jsx';
import { InDepth } from './InDepth.jsx';
import { Home } from './Home.jsx';

import { ScreenOne } from './ScreenOne.jsx';
import { SceneContainer } from './SceneContainer.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model/:model" element={<SceneContainer />} />
        <Route path="/screen-one" element={<ScreenOne />} />
        <Route path="in-depth/:slug" element={<InDepth />} />
        <Route path=":theme/*" element={<Theme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
