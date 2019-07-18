import React from 'react';
import { useRouter } from 'next/router';
import superagent from 'superagent';

function TrialRequestPage({
  studentName,
  parentName,
  instrument,
  address,
  city,
  zip,
  birthDate
}) {
  const router = useRouter();
  const { id } = router.query;

  async function handleAccept() {
    const result = await superagent
      .post(`${process.env.BACK_END_SERVER_URI}/trialRequests/select`)
      .send(
        JSON.stringify({
          trialRequestId: id,
          teacherId: '10002'
        })
      )
      .set('Authorization', `Bearer ${process.env.TOKEN}`);
    console.log(result);
  }

  return (
    <>
      <nav>
        <ul>
          <li>Requests</li>
        </ul>
      </nav>
      <h2>{studentName}</h2>
      <div>{parentName}</div>
      <div>{instrument}</div>
      <div>{(address, city)}</div>
      <button onClick={handleAccept}>Accept</button>
      <div>{birthDate}</div>
      <section>Calendar</section>
      <section>Map</section>
    </>
  );
}

TrialRequestPage.getInitialProps = async ({ query }) => {
  const response = await superagent
    .get(`${process.env.BACK_END_SERVER_URI}/trialRequests/${query.id}`)
    .set('Authorization', `Bearer ${process.env.TOKEN}`);

  console.log(response.body);

  return { ...response.body };
};

export default TrialRequestPage;
