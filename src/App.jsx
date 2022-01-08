import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Theme } from './Theme';
import { InDepth } from './InDepth';
import { Home } from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":theme/*" element={<Theme />} />
        <Route path="in-depth/:slug" element={<InDepth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <Canvas style={{ background: 'black' }}>
//   <ambientLight intensity={0.6} color="white" />
//   <spotLight
//     intensity={0.6}
//     angle={0.1}
//     penumbra={1}
//     position={[10, 15, 10]}
//     castShadow
//   />
//   <Stars
//     radius={100}
//     depth={50}
//     count={5000}
//     factor={4}
//     saturation={0}
//     fade
//   />

//   <OrbitControls />
//   <Model />
// </Canvas>
