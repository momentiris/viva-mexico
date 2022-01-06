import { themes } from '@/content/themes/index';
function App() {
  console.log(themes);
  return (
    <div className="w-full h-full bg-mexicoBlue">
      {themes.map((theme) => (
        <div key={theme.label}>{theme.label}</div>
      ))}
    </div>
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
