import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import superagent from 'superagent';

import ReactMapGL, { Marker } from 'react-map-gl';
import moment from 'moment';

import Container from '../../components/container';
import Pin from '../../components/pin';

function TrialRequestPage({
  studentName,
  parentName,
  instrument,
  address,
  city,
  zip,
  studentBirthDate
}) {
  const [latLong, setLatLong] = useState([]);

  useEffect(() => {
    const encodedAddress = encodeURI(`${address} ${city} ${zip}`);
    const getLatLong = async () => {
      const mapboxResponse = await superagent.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${
          process.env.MAPBOX_TOKEN
        }`
      );
      setLatLong([...mapboxResponse.body.features[0].center]);
    };

    getLatLong();
  });

  const router = useRouter();
  const { id } = router.query;

  const [accepted, setAccepted] = useState(false);
  const age = moment().diff(studentBirthDate, 'years');

  async function handleAccept() {
    setAccepted(true);
    const result = await superagent
      .post(`${process.env.BACK_END_SERVER_URI}/trialRequests/select`)
      .send(
        JSON.stringify({
          trialRequestId: id,
          teacherId: '10002'
        })
      )
      .set('Authorization', `Bearer ${process.env.TOKEN}`);
  }

  return (
    <Container>
      <h1 class="text-3xl">{studentName}</h1>
      <div>{instrument}</div>
      <div>{(address, city)}</div>
      <div>{age} years old</div>
      <section>
        {latLong[0] && latLong[1] ? (
          <ReactMapGL
            className="rounded-lg"
            mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
            width="100%"
            height="280px"
            latitude={latLong[1]}
            longitude={latLong[0]}
            zoom={8}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker
              latitude={latLong[1]}
              longitude={latLong[0]}
              offsetLeft={-10}
              offsetTop={-10}
            >
              <Pin size={20} />
            </Marker>
          </ReactMapGL>
        ) : null}
      </section>
      <button
        onClick={handleAccept}
        class={`${
          accepted ? 'cursor-not-allowed hover:bg-green-400 opacity-50 ' : null
        } bg-green-400 hover:bg-green-600 text-white px-4 py-2 rounded-lg w-full my-4 `}
        disabled={accepted ? 'disabled' : null}
      >
        {accepted ? 'Accpeted' : 'Accept'}
      </button>
    </Container>
  );
}

TrialRequestPage.getInitialProps = async ({ query }) => {
  const response = await superagent
    .get(`${process.env.BACK_END_SERVER_URI}/trialRequests/${query.id}`)
    .set('Authorization', `Bearer ${process.env.TOKEN}`);

  return { ...response.body };
};

export default TrialRequestPage;
