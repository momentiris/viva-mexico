import { PresentationalScene } from '../components/PresentationalScene';
import { SunStoneSmall, SacrificialCasket } from '../models/index';

export const ScreenTwo = () => {
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row bg-gray-300 gap-1">
      <div className="bg-gray-700 w-full h-full">
        <PresentationalScene>
          <SacrificialCasket />
        </PresentationalScene>
      </div>
      <div className="bg-gray-700 w-full h-full">
        <PresentationalScene>
          <SunStoneSmall />
        </PresentationalScene>
      </div>
    </div>
  );
};
