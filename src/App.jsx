import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
} from 'react-router-dom';

import { themes } from '@/content/themes/index';

const Home = () => {
  return (
    <div className="w-full h-full bg-mexicoBlue">
      <div className="mx-auto flex h-full flex-col items-center justify-center text-white">
        {themes.map((theme) => (
          <Link to={theme.name} className="text-2xl font-bold" key={theme.name}>
            {theme.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const ThemeContent = ({ themeContent }) => {
  console.log('this is props: ', themeContent);
  const { introduction, timeline } = themeContent;
  return (
    <div>
      <Routes>
        <Route exact path=":timelineInstance" element={<TimelineInstance />} />
      </Routes>
      <h1 className="text-2xl font-bold">{introduction.heading}</h1>
      <div>
        {introduction.body.map((x, i) => (
          <div key={i} className="mb-2">
            {x}
          </div>
        ))}
      </div>
      <div>
        {timeline.map((timelineInstance, i) => (
          <div key={i} className="mb-2">
            <Link to={timelineInstance.slug} className="text-lg font-semibold">
              {timelineInstance.heading}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const Theme = () => {
  const params = useParams();
  const theme = themes.find((theme) => theme.name === params.theme);

  if (!theme) {
    console.warn('no theme found for: ' + params.theme);
    return null;
  }
  console.log('this is theme: ', theme);

  return (
    <div>
      Theme: {params.theme}
      <div>
        {theme.content.map((content, index) => (
          <ThemeContent key={index} themeContent={content} />
        ))}
      </div>
    </div>
  );
};

const TimelineInstance = () => {
  const params = useParams();
  console.log('this is paramms: ', params);
  return <div>timeline instance </div>;
};

function App() {
  console.log(themes);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path=":theme/*" element={<Theme />}>
          {/* <Route
            exact
            path=":timelineInstance/"
            element={<TimelineInstance />}
          /> */}
        </Route>
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
