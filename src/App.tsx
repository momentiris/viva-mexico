import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Theme } from './Theme';

import { Home } from './Home';

import { ScreenOne } from './ScreenOne';
import { ModelRouter } from './ModelRouter';
import { ThemePost } from './ThemePost';
import { Layout } from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="theme/:theme" element={<Theme />} />
        <Route path="theme/:theme/post/:post" element={<ThemePost />} />
      </Route>
      <Route path="/model/:model" element={<ModelRouter />} />
      <Route path="/screen/one" element={<ScreenOne />} />
    </Routes>
  );
};

export default App;
