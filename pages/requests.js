import React from 'react';
import superagent from 'superagent';

import TrialRequest from '../components/trial-request';

function TrialRequestsPage({ trialRequests }) {
  return (
    <>
      {trialRequests.map(trialRequest => (
        <TrialRequest {...trialRequest} />
      ))}
    </>
  );
}

TrialRequestsPage.getInitialProps = async () => {
  const response = await superagent.get(
    `${process.env.BACK_END_SERVER_URI}/trialRequests`
  );

  return { trialRequests: response.body };
};
export default TrialRequestsPage;
