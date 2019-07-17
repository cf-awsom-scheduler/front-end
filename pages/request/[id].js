import React from 'react';
import superagent from 'superagent';

import Layout from '../../components/Layout';

function TrialRequestPage({
  studentName,
  parentName,
  instrument,
  address,
  city,
  zip,
  birthDate
}) {
  return (
    <Layout>
      <nav>
        <ul>
          <li>Requests</li>
        </ul>
      </nav>
      <h2>{studentName}</h2>
      <div>{parentName}</div>
      <div>{instrument}</div>
      <div>{(address, city)}</div>
      <div>{birthDate}</div>
    </Layout>
  );
}

TrialRequestPage.getInitialProps = async ({ query }) => {
  const response = await superagent.get(
    `${process.env.BACK_END_SERVER_URI}/trialRequests/${query.id}`
  );

  return { ...response.body };
};

export default TrialRequestPage;
