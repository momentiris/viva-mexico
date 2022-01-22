import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

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
      <Router />
    </BrowserRouter>
  );
}

const Router = () => {
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

          <Route path="/model/:model" element={<ModelRouter />} />
          <Route path="/screen/one" element={<ScreenOne />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
