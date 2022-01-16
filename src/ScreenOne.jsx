import { ModelWrapper } from './ModelWrapper.jsx';
import { Maya, Toltek, Olmek } from './models/index.jsx';

export const ScreenOne = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 grid-rows-3 lg:grid-rows-2 bg-white gap-1">
      <div className="bg-gray-700">
        <ModelWrapper>
          <Maya />
        </ModelWrapper>
      </div>
      <div className="bg-gray-700">
        <ModelWrapper>
          <Toltek />
        </ModelWrapper>
      </div>
      <div className="col-span-1 lg:col-span-2 bg-gray-700">
        <ModelWrapper>
          <Olmek />
        </ModelWrapper>
      </div>
    </div>
  );
};
