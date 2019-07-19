import React from 'react';
import Link from 'next/link';

function TrialRequest({ id, studentName, instrument, city }) {
  return (
    <Link href="request/[id]" as={`/request/${id}`}>
      {/* <div class="max-w-sm w-full lg:max-w-full lg:flex mb-4"> */}
      <div class="w-full md:w-1/2 md:mx-4 mx-0 mb-4 border border-pink-400 hover:bg-pink-100 rounded-lg p-8 flex flex-col justify-between leading-normal cursor-pointer">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">{studentName}</div>
          <p class="text-gray-700 text-base">{city}</p>
        </div>
        <div class="py-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {instrument}
          </span>
        </div>
      </div>
      {/* </div> */}
    </Link>
  );
}

{
  /* // <Link href="request/[id]" as={`/request/${id}`}>
//   <section>
//     <h2>{studentName}</h2>
//     {instrument}
   
//   </section>
// </Link> */
}
export default TrialRequest;
