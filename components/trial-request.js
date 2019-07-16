import React from 'react';

function TrialRequest({ studentName, instrument }) {
  return (
    <section>
      <h2>{studentName}</h2>
      {instrument}
    </section>
  );
}

export default TrialRequest;
