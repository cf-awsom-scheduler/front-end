import React from 'react';
import superagent from 'superagent';
import Container from '../components/container';

import TrialRequest from '../components/trial-request';

function TrialRequestsPage({ trialRequests }) {
  return (
    <Container>
      <h1 class="font-mono text-3xl text-center mb-10 tracking-wider">
        New Student Requests
      </h1>
      <img
        src="/static/assets/images/kids.png "
        class="md:w-3/4 w-full mx-auto mb-10 "
      />
      <div class="flex md:flex-row flex-col flex-wrap">
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

  return { trialRequests: response.body };
};

export default TrialRequestsPage;
