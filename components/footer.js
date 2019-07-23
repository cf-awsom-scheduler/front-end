import React from 'react';

const Footer = () => (
  <div className="mx-auto px-4 w-full bg-gray-800 p-6">
    <ul class="flex justify-center">
      <li>
        <a href="https://www.facebook.com/awsomusic/">
          <img
            src="/static/assets/images/icons/facebook-brands.svg"
            class={`w-${12} mr-3`}
          />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/awsomusic/">
          <img
            src="/static/assets/images/icons/instagram-brands.svg"
            class={`w-${12} mr-3`}
          />
        </a>
      </li>
      <li>
        <a href="https://www.awsom.info/">
          <img
            src="/static/assets/images/icons/squarespace-brands.svg"
            class={`w-${12} mr-3`}
          />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/awsom-llc/about/">
          <img
            src="/static/assets/images/icons/linkedin-brands.svg"
            class={`w-${12}`}
          />
        </a>
      </li>
    </ul>
    <span />
  </div>
);

export default Footer;
