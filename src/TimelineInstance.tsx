import { Navigate, useParams } from 'react-router-dom';
import { Article } from './Article';
import { utils } from './utils';

export const TimelineInstance = () => {
  const params = useParams<'timelineInstance'>();
  const timelineInstance = utils.getTimelineInstance(params.timelineInstance);

  if (!timelineInstance) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Article content={timelineInstance} />
    </div>
  );
};
