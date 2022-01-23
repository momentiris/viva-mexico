import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Theme } from './Theme';
import { Themes } from './Themes';
import { ScreenOne } from './ScreenOne';
import { ModelRouter } from './ModelRouter';
import { ThemePost } from './ThemePost';
import { Layout } from './Layout';
import { Start } from './Start';

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
        <Route index element={<Start />} />
        <Route path="theme" element={<Themes />} />
        <Route path="theme/:theme" element={<Theme />} />
        <Route path="theme/:theme/post/:post" element={<ThemePost />} />
      </Route>
      <Route path="/model/:model" element={<ModelRouter />} />
      <Route path="/screen/one" element={<ScreenOne />} />
    </Routes>
  );
};

export default App;
