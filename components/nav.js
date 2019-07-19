import React, { useState } from 'react';
import Link from 'next/link';

const Nav = ({ user }) => {
  const [collapsed, setCollapsed] = useState(true);

  function handleClick() {
    setCollapsed(!collapsed);
  }

  return (
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6 mb-8">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="/static/assets/images/logo.png" class="w-32" />
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={handleClick}
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          collapsed ? 'hidden' : null
        }`}
      >
        <div class="text-sm lg:flex-grow">
          <Link href="/requests">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-400 mr-4"
            >
              Requests
            </a>
          </Link>
          <Link href="/profile">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              Profile
            </a>
          </Link>
          <Link href="/about">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              About
            </a>
          </Link>
          <Link href="/logout">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              Logout
            </a>
          </Link>
        </div>
      </div>
    </nav>

    // <nav>
    //   <ul>
    //     {console.log(user)}
    //     {user ? (
    //       <>
    //         <li>
    //           <Link href="/requests">
    //             <a>Requests</a>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link prefetch href="/profile">
    //             <a>Profile</a>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link prefetch href="/about">
    //             <a>About</a>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/logout">
    //             <a className="nav-link">Log Out</a>
    //           </Link>
    //         </li>
    //       </>
    //     ) : (
    //       <li>
    //         <Link href="/login">
    //           <a className="nav-link">Log In</a>
    //         </Link>
    //       </li>
    //     )}
    //   </ul>

    // </nav>
  );
};

export default Nav;
