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
  studentBirthDate,
  notes,
  experience,
  availability,

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
      {/* <h1>{availability}</h1> */}
      <h1 class="text-3xl text-center font-bold tracking-wider mb-10 font-mono tracking-wider">
        {studentName}
      </h1>
      <div class="flex justify-around mb-10">
    
        <section class="w-1/2 mr-10">
          {latLong[0] && latLong[1] ? (
            <ReactMapGL
              mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
              width="100%"
              height="350px"

              latitude={latLong[1]}
              longitude={latLong[0]}
              zoom={10}
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

        <div class="flex flex-col justify-around mb-10 mr-10">
          <div class="border-2 p-3  md:w-40 text-center">{city}</div>
          <div class="border-2 p-3  md:w-40 text-center">{instrument}</div>
          <div class="border-2 p-3  md:w-40 text-center">{age} years old</div>
        </div>
        <div class="flex flex-col justify-around">
          <div>
            <h3 class="mb-5 text-xl text-center">Experience:</h3>
            <p class="border-2 p-5 ">{experience}</p>
          </div>
          <div>
            <h3 class="mb-5 text-xl text-center">Notes:</h3>
            <p class="border-2 p-5 ">{notes}</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleAccept}
        class={`${
          accepted ? 'cursor-not-allowed hover:bg-gray-600 opacity-50 ' : null
        } bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 mb-12  w-full block mx-auto tex-center my-4 text-2xl`}
        disabled={accepted ? 'disabled' : null}
      >
        {accepted ? 'Accepted' : 'Accept'}
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
