import React from 'react';
import superagent from 'superagent';
import Container from '../components/container';

import TrialRequest from '../components/trial-request';

function TrialRequestsPage({ trialRequests }) {
  return (
    <Container>
      <div class="flex md:flex-row flex-col px-4">
        {trialRequests.map(trialRequest => (
          <TrialRequest key={trialRequest.id} {...trialRequest} />
        ))}
      </div>
    </Container>
  );
}

TrialRequestsPage.getInitialProps = async () => {
  const response = await superagent
    .get(`${process.env.BACK_END_SERVER_URI}/trialRequests`)
    .set('Authorization', `Bearer ${process.env.TOKEN}`);
  console.log(response.body);

  return { trialRequests: response.body };
};

export default TrialRequestsPage;
