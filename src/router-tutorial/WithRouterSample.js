import React from 'react';
import { useLocation, useParams } from '../../node_modules/react-router/index';
import { withRouter } from '../../node_modules/react-router/index';

const WithRouterSample = () => {
  const { location } = useLocation();
  const { match } = useParams();
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
    </div>
  );
};

export default WithRouterSample;
