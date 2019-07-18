import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Head from '../components/head';

const Home = ({ user }) => {
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push('/requests');
    }
  });
  return null;
};

export default Home;
