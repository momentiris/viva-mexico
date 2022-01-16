import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
} from 'react-router-dom';

import { Theme } from './Theme.jsx';
import { InDepth } from './InDepth.jsx';
import { Home } from './Home.jsx';

import { ScreenOne } from './ScreenOne.jsx';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Olmek } from './models/Olmek.jsx';
import { SunStone } from './models/SunStone.jsx';
import { Maya } from './models/Maya.jsx';
import { Toltek } from './models/Toltek.jsx';
import { SacrificalStone } from './models/SacrificialStone.jsx';

import { animated, useSpring } from '@react-spring/web';

const models = {
  olmek: <Olmek />,
  sunstone: <SunStone />,
  maya: <Maya />,
  toltek: <Toltek />,
  sacrificialstone: <SacrificalStone />,
};

const Loader = () => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },

    // config: {
    //   duration: 500,
    // },
  });

  return (
    <animated.div
      style={styles}
      className="w-full h-full flex items-center justify-center bg-gray-300"
    >
      loading
    </animated.div>
  );
};

const Scene = () => {
  const params = useParams();
  const model = models[params.model];

  if (!model) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full h-full gap-2 bg-gray-300">
      <Suspense fallback={null}>
        <Canvas>
          <ambientLight intensity={0.6} color="white" />
          <spotLight
            intensity={0.6}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          {/* <OrbitControls /> */}
          <OrbitControls autoRotate={true} autoRotateSpeed={1} />
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            {/* <motion.mesh /> */}

            {model}
          </Float>
        </Canvas>
      </Suspense>
      <Loader />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model/:model" element={<Scene />} />

        <Route path="/screen-one" element={<ScreenOne />} />

        <Route path="n-depth/:slug" element={<InDepth />} />
        <Route path=":theme/*" element={<Theme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
