import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Theme } from './Theme';
import { InDepth } from './InDepth';
import { Home } from './Home';

import { ScreenOne } from './ScreenOne';
import { ModelRouter } from './ModelRouter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model/:model" element={<ModelRouter />} />
        <Route path="/screen/one" element={<ScreenOne />} />
        <Route path="in-depth/:slug" element={<InDepth />} />
        <Route path=":theme/*" element={<Theme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
