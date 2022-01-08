import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
  Navigate,
} from 'react-router-dom';

import { themes } from '@/content/themes/index';
import { utils } from '@/utils.js';
import { Article } from './Article';

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

const ThemeHome = ({ theme }) => {
  return (
    <div>
      {theme.content.map((content, index) => (
        <div key={index}>
          <h1 className="text-2xl font-bold">{content.introduction.heading}</h1>
          <div>
            {content.introduction.body.map((x, i) => (
              <div key={i} className="mb-2">
                {x}
              </div>
            ))}
          </div>
          <div>
            {content.timeline.map((timelineInstance, i) => (
              <div key={i} className="mb-2">
                <Link
                  to={timelineInstance.slug}
                  className="text-lg font-semibold"
                >
                  {timelineInstance.heading}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const TimelineInstance = () => {
  const params = useParams();

  const timelineInstance = utils.getTimelineInstance(
    themes,
    params.timelineInstance
  );

  return (
    <div>
      <h1 className="text-2xl font-bold">{timelineInstance.heading}</h1>
      {timelineInstance.body.map((paragraph, index) => (
        <div key={index} className="mb-2">
          {paragraph}
        </div>
      ))}
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

  return (
    <Routes>
      <Route path="/" element={<ThemeHome theme={theme} />} />
      <Route
        path=":timelineInstance"
        element={<TimelineInstance theme={theme} />}
      />
    </Routes>
  );
};

const InDepth = () => {
  const params = useParams();
  const inDepthText = utils.getInDepthText(params.slug);

  if (!inDepthText) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Article content={inDepthText} />
    </div>
  );
};

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
