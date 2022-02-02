import { PresentationalScene } from '../components/PresentationalScene';
import { SunStoneSmall, SacrificialCasket } from '../models/index';

export const ScreenTwo = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-300 gap-1">
      <div className="bg-gray-700">
        <PresentationalScene>
          <SacrificialCasket />
        </PresentationalScene>
      </div>
      <div className="bg-gray-700">
        <PresentationalScene>
          <SunStoneSmall />
        </PresentationalScene>
      </div>
    </div>
  );
};
