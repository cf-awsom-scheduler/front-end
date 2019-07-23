import React from 'react';

const Footer = () => (
  <div className="mx-auto px-4 w-full bg-gray-800 p-6">
    <ul class="flex justify-center mt-5">
      <li>
        <a href="https://www.facebook.com/awsomusic/">
          <img
            src="/static/assets/images/icons/facebook-brands.svg"
            class={`w-${10} mr-5`}
          />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/awsomusic/">
          <img
            src="/static/assets/images/icons/instagram-brands.svg"
            class={`w-${10} mr-5`}
          />
        </a>
      </li>
      <li>
        <a href="https://www.awsom.info/">
          <img
            src="/static/assets/images/icons/squarespace-brands.svg"
            class={`w-${10} mr-5`}
          />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/awsom-llc/about/">
          <img
            src="/static/assets/images/icons/linkedin-brands.svg"
            class={`w-${10}`}
          />
        </a>
      </li>
    </ul>
    <h3 class="text-white tracking-widest text-center mt-5 mb-5">
      AWSOM, PO BOX 86, RENTON, WA 98057 (425)951-9758 HELLO@AWSOM.INFO
    </h3>
  </div>
);

export default Footer;
