import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Theme } from './Theme';
import { InDepth } from './InDepth';
import { Home } from './Home';

import { Suspense } from 'react';
import { ScreenOne } from './ScreenOne';

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screen-one" element={<ScreenOne />} />

          <Route path="in-depth/:slug" element={<InDepth />} />
          <Route path=":theme/*" element={<Theme />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
