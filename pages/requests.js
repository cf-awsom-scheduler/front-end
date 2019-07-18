import React from 'react';
import superagent from 'superagent';

import Layout from '../components/Layout';
import TrialRequest from '../components/trial-request';

function TrialRequestsPage({ trialRequests }) {
  return (
    <Layout>
      {trialRequests.map(trialRequest => (
        <TrialRequest key={trialRequest.id} {...trialRequest} />
      ))}
    </Layout>
  );
}

TrialRequestsPage.getInitialProps = async () => {
  const response = await superagent.get(
    `${process.env.BACK_END_SERVER_URI}/trialRequests`
  )
  .set('Authorization', `Bearer ${process.env.TOKEN}`);
  console.log(response.body)

  return { trialRequests: response.body };
};

export default TrialRequestsPage;
