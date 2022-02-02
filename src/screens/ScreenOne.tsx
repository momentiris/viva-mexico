import { PresentationalScene } from '../PresentationalScene';
import { Maya, Toltek, Olmek } from '../models/index';

export const ScreenOne = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-2 grid-rows-3 lg:grid-rows-2 bg-gray-300 gap-1">
      <div className="bg-gray-700 w-ful h-full">
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
