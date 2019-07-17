import React from 'react';
import Link from 'next/link';

function TrialRequest({ id, studentName, instrument }) {
  return (
    <Link href={`request/${id}`}>
      <section>
        <h2>{studentName}</h2>
        {instrument}
        <style jsx>{`
          section {
            border: solid 1px black;
            border-radius: 16px;
            padding: 32px;
            margin-bottom: 16px;
            cursor: pointer;
          }
        `}</style>
      </section>
    </Link>
  );
}

export default TrialRequest;
