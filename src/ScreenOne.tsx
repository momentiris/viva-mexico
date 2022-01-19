import { PresentationalScene } from './PresentationalScene';
import { Maya, Toltek, Olmek } from './models/index';

export const ScreenOne = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 grid-rows-3 lg:grid-rows-2 bg-white gap-1">
      <div className="bg-gray-700">
        <PresentationalScene>
          <Maya />
        </PresentationalScene>
      </div>
      <div className="bg-gray-700">
        <PresentationalScene>
          <Toltek />
        </PresentationalScene>
      </div>
      <div className="col-span-1 lg:col-span-2 bg-gray-700">
        <PresentationalScene>
          <Olmek />
        </PresentationalScene>
      </div>
    </div>
  );
};
