import React from 'react';
import Link from 'next/link';

function TrialRequest({ id, studentName, instrument, city }) {
  return (
    <Link href="request/[id]" as={`/request/${id}`}>
      <div class=" 1/2 md:w-1/3 ">
        <div class="w-full md:w-4/5 md:mx-4 md:mx-auto mb-10 border-2 hover:bg-gray-100  p-8 flex flex-col justify-between leading-normal cursor-pointer">
          <div class="mb-8">
            <div class="text-gray-900 font-bold font-mono tracking-wider text-xl mb-6 text-center">
              {studentName}
            </div>
            <p class="text-gray-700 text-base text-center">{city}</p>
          </div>
          <div class="py-2">
            <div class="border-2  px-3 py-1 text-sm font-semibold text-gray-700 mx-auto text-center w-1/3 md:w-2/3 mb-5 opacity-75">
              {instrument}
            </div>
          </div>
          <img
            src={`../static/assets/images/instruments/${instrument}.png `}
            class="md:w-1/2 mx-auto w-1/4"
          />
        </div>
      </div>
    </Link>
  );
}

export default TrialRequest;
