import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Outlet,
} from 'react-router-dom';

import { Theme } from './Theme';

import { Home } from './Home';

import { ScreenOne } from './ScreenOne';
import { ModelRouter } from './ModelRouter';
import { ThemePost } from './ThemePost';
import { ThemeObjectText } from './ThemeObjectText';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      {/* <ROuter2 /> */}
      <Router />
    </BrowserRouter>
  );
}

const ROuter2 = () => {
  return (
    <Routes>
      <Route path="/model/:model" element={<ModelRouter />} />
    </Routes>
  );
};

const ThemeRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter={true}>
      <motion.div
        className="w-full h-full"
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/theme/:theme" element={<Theme />} />
          <Route path="/theme/:theme/post/:post" element={<ThemePost />} />
          <Route
            path="/theme/:theme/object-text/:slug"
            element={<ThemeObjectText />}
          />
          <Route path="*" element={<div>NOT FOUND</div>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<ThemeRouter />} />
      <Route path="/model/:model" element={<ModelRouter />} />
      <Route path="/screen/one" element={<ScreenOne />} />
    </Routes>
  );
};

export default App;
